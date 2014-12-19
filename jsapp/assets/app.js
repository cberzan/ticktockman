// Dimensions of sunburst.
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;

// Color scale for the top-level categories.
var topLevelScale = d3.scale.category10();

// Get the color for the given node.
function color(d) {
  if (d.depth == 0) {
    return "#000000";
  } else if (d.depth == 1) {
    return topLevelScale(d.name);
  } else {
    return d3.hsl(color(d.parent)).brighter(0.5).toString();
    // FIXME: disappears into white for some colors
  }
}

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#sunburst").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

// Main function to draw and set up the visualization, once we have the data.
function createSunburst(json) {

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition.nodes(json)
      .filter(function(d) {
      return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return color(d); })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;

  d3.select("#total_time").text(humanizeSeconds(totalSize));
};

function createStreamGraph(data) {
    var x = d3.scale.linear()
        .domain([0, data[0].length - 1])
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([0, 604800])
        .range([height, 0]);

    var color2 = d3.scale.linear()
        .range(["#aad", "#556"]);

    var area = d3.svg.area()
        .x(function(d) { return x(d.x); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); });

    var svg = d3.select("#streamgraph").append("svg")
        .attr("width", width)
        .attr("height", height);

    var stack = d3.layout.stack().offset("wiggle");
    var layers = stack(data);

    svg.selectAll("path")
        .data(layers)
        .enter().append("path")
        .attr("d", area)
        .style("fill", function(d) { return topLevelScale(d.category); });
};

// Return humanized string like "3d5h", "5h3m", "3m5s", or "4s".
function humanizeSeconds(seconds) {
  if (seconds > 86400) {
    return Math.floor(seconds / 86400) + "d" +
      Math.floor((seconds % 86400) / 3600) + "h";
  } else if (seconds > 3600) {
    return Math.floor(seconds / 3600) + "h" +
      Math.floor((seconds % 3600) / 60) + "m";
  } else if (seconds > 60) {
    return Math.floor(seconds / 60) + "m" +
      Math.floor(seconds % 60) + "s";
  } else {
    return Math.floor(seconds) + "s";
  }
}

// Return humanized string like "86.3%" or "< 0.1%".
function humanizePercent(percent) {
  if (percent < 0.1) {
    return "< 0.1%";
  } else {
    return percent.toPrecision(3) + "%";
  }
}

// Fade all but the current sequence.
function mouseover(d) {
  d3.select("#category").text(d.name);

  var percOfParent = 100 * d.value / d.parent.value;
  var percOfParentStr = humanizePercent(percOfParent);
  d3.select("#perc_of_parent").text(percOfParentStr);

  var percOfTotal = (100 * d.value / totalSize).toPrecision(3);
  var percOfTotalStr = percOfTotal + "%";
  if (percOfTotal < 0.1) {
    percOfTotalStr = "< 0.1%";
  }
  d3.select("#perc_of_total").text(percOfTotalStr);

  var secondsSpent = d.value;
  var timeSpentString = humanizeSeconds(secondsSpent);
  d3.select("#timespent").text(timeSpentString);

  var secondsInADay = 86400.0;
  var secondsPerDay = secondsInADay * d.value / totalSize;
  var perDayString = humanizeSeconds(secondsPerDay);
  d3.select("#perday").text(perDayString);

  d3.select("#hud").style("visibility", "hidden");
  d3.select("#hud_hover").style("visibility", "");

  var sequenceArray = getAncestors(d);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Set each segment to full opacity.
  d3.selectAll("path")
      .style("opacity", 1);

  d3.select("#hud").style("visibility", "");
  d3.select("#hud_hover").style("visibility", "hidden");
}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

// Take an allData object and return an object suitable for
// d3.partition.nodes(). The returned object is a tree of categories that has a
// "size" property on every leaf. This size is the number of seconds spent in
// that leaf category.
function buildPartitionData(allData) {
    var tree = cloneTree(allData.categories);
    var leaves = getLeaves(tree);
    var categoryToLeaf = {};
    _.each(leaves, function(leaf) {
        leaf.size = 0;
        categoryToLeaf[leaf.name] = leaf;
    });
    _.each(allData.events, function(evnt) {
        if (evnt.category === 'untracked') {
            return;
        }
        var seconds = evnt.end.diff(evnt.begin, 'seconds');
        if (!_.has(categoryToLeaf, evnt.category)) {
            throw new Error("category " + evnt.category + " is not a leaf");
        }
        categoryToLeaf[evnt.category].size += seconds;
    });
    return tree;
}

// Return a deep-copy of the given tree. Only copies the "name" and "children"
// properties.
function cloneTree(root) {
    var copy = {};
    copy.name = root.name;
    if (_.has(root, "children")) {
        copy.children = _.map(root.children, cloneTree);
    }
    return copy;
}

// Return an array containing the leaf nodes in the given tree.
function getLeaves(root) {
    if(_.has(root, "children")) {
        return _.flatten(_.map(root.children, getLeaves));
    } else {
        return [root];
    }
}

// Take an allData object and return an object suitable for
// d3.stack(). The returned object is a 2-dimensional array of objects that
// have x, y, y0, weekBegin, weekEnd and category properties.
function buildStackData(allData) {
    // There will be a layer for each leaf category.
    var categories = _.map(getLeaves(allData.categories), function(leaf) {
        return leaf.name;
    });
    categories.unshift("untracked");

    // Split events crossing midnight into pieces that do not cross midnight.
    var splitEvents = [];
    _.each(allData.events, function(evnt) {
        var begin = evnt.begin;
        var midnight = begin.clone().hour(0).minute(0).add(1, 'day');
        while (midnight.isBefore(evnt.end)) {
            var piece = {
                "category": evnt.category,
                "begin": begin,
                "end": midnight,
                "comment": evnt.comment,
            };
            splitEvents.push(piece);
            begin = piece.end;
            midnight.add(1, 'day');
        }
        var lastPiece = {
            "category": evnt.category,
            "begin": begin,
            "end": evnt.end,
            "comment": evnt.comment,
        };
        splitEvents.push(lastPiece);
    });

    // Group events into complete days, discarding events at the beginning and
    // end of the data, which might be part of incomplete events.
    var days = [];
    var currentDay = "incomplete";
    _.each(splitEvents, function(evnt) {
        // If event starts at midnight, start a new day.
        if (evnt.begin.hour() == 0 && evnt.begin.minute() == 0) {
            // Finish current day.
            if (currentDay != "incomplete") {
                days.push(currentDay);
            }
            currentDay = [];
        }
        // Add event to current day.
        if (currentDay != "incomplete") {
            currentDay.push(evnt);
        }
    });
    // FIXME: edge case when currentDay is complete after exiting the loop

    // Need at least a week's worth of data.
    if (days.length < 7) {
        // TODO UI
        console.log("not enough data");
        return;
    }

    // Build layers array.
    var layers = [];
    var categToLayer = {};
    var categToSeconds = {};
    _.each(categories, function(category) {
        layer = [];
        layers.push(layer);
        categToLayer[category] = layer;
        categToSeconds[category] = 0;
    });
    var weekIndex = 0;
    var weekBegin = days[0][0].begin;
    var weekEnd = days[6][days[6].length - 1].end;
    var addDay = function(day, coef) {
        _.each(day, function(evnt) {
            var seconds = evnt.end.diff(evnt.begin, 'seconds');
            categToSeconds[evnt.category] += seconds * coef;
        });
    };
    var saveWeek = function() {
        _.each(categToLayer, function(layer, category) {
            layer.push({
                "x": weekIndex,
                "y": categToSeconds[category],
                "y0": 0,
                "weekBegin": weekBegin,
                "weekEnd": weekEnd,
                "category": category,
            });
        });
    };
    for (var i = 0; i < 7; i++) {
        addDay(days[i], 1);
    }
    saveWeek();
    for(var i = 7; i < days.length; i++) {
        weekIndex += 1;
        weekBegin.add(1, 'day');
        weekEnd.add(1, 'day');
        addDay(days[i - 7], -1);
        addDay(days[i], 1);
        saveWeek();
    }
    console.log(layers);
    // throw new Error("STOP");
    return layers;
}

function main() {
    // Parse ISO-8601 datetimes into Moment objects.
    for (var i = 0; i < data.events.length; i++) {
        data.events[i].begin = moment(data.events[i].begin);
        data.events[i].end = moment(data.events[i].end);
    }

    createSunburst(buildPartitionData(data));
    createStreamGraph(buildStackData(data));
}

main();
