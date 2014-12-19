var secondsInADay = 86400.0;

// Dimensions of sunburst.
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;

// Build a color scheme for the categories in the given allData object.
// Returns a function color that can be called like color(category) or
// color(category, depth).
function makeColorFunc(allData) {
    var topLevelCategs = _.map(allData.categories.children, function(node) {
        return node.name;
    });
    console.log(topLevelCategs);
    var categToTopLevelCateg = {};
    _.map(getRootToLeafPaths(allData.categories), function(path) {
        for (var i = 1; i < path.length; i++) {
            categToTopLevelCateg[path[i].name] = path[1].name;
        }
    });
    console.log(categToTopLevelCateg);

    var hueScale = d3.scale.ordinal()
        .domain(topLevelCategs)
        .rangePoints([0, 360], 1);
    var saturation = 0.5;
    var lightness = 0.5;

    return function(category, depth) {
        if (category == "untracked" || category == "root") {
            return "#000000";
        }
        category = categToTopLevelCateg[category];
        if (depth === undefined) {
            depth = 1;
        }
        var color = d3.hsl(hueScale(category), saturation, lightness);
        for (var i = 1; i < depth; i++) {
            color = color.brighter(0.5);
        }
        return color.toString();
    };
}

// We set this later, after loading the data.
var categoryColor;

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
      .style("fill", function(d) { return categoryColor(d.name, d.depth); })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;

  d3.select("#total_time").text(humanizeSeconds(totalSize));
};

function createStreamGraph(data) {
    var width = 1300;
    var height = 400;

    var x = d3.scale.linear()
        .domain([0, data[0].length - 1])
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([0, 604800])
        .range([height, 0]);

    var area = d3.svg.area()
        .x(function(d) { return x(d.x); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); });

    var svg = d3.select("#streamgraph").append("svg")
        .attr("width", width)
        .attr("height", height);

    var stack = d3.layout.stack();
    var layers = stack(data);

    svg.selectAll("path")
        .data(layers)
        .enter().append("path")
        .attr("d", area)
        .style("fill", function(d) { return categoryColor(d[0].category); });
};

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
        if (!_.has(categoryToLeaf, evnt.category)) {
            throw new Error("category " + evnt.category + " is not a leaf");
        }
        categoryToLeaf[evnt.category].size += durationSeconds(evnt);
    });
    return tree;
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
    var splitEvents = _.flatten(_.map(allData.events, splitEventAtMidnight));

    // Group events into days, and discard any incomplete days at the beginning
    // or end of the data.
    var days = groupEventsIntoDays(splitEvents);
    if (days.length > 0 && !isMidnight(_.first(_.first(days)).begin)) {
        days.shift();
    }
    if (days.length > 0 && !isMidnight(_.last(_.last(days)).end)) {
        days.pop();
    }

    // Sanity check that the events in each day add up to a full day.
    _.each(days, function(day) {
        var totalSeconds = _.reduce(day, function(memo, evnt) {
            assert(durationSeconds(evnt) >= 0);
            return memo + durationSeconds(evnt);
        }, 0);
        assert(totalSeconds == secondsInADay);
    });

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
    var weekBegin = days[0][0].begin.clone();
    var weekEnd = days[6][days[6].length - 1].end.clone();
    var saveWeek = function() {
        var totalSeconds = 0;
        _.each(categToLayer, function(layer, category) {
            totalSeconds += categToSeconds[category];
            layer.push({
                "x": weekIndex,
                "y": categToSeconds[category],
                "y0": 0,
                "weekBegin": weekBegin.clone(),
                "weekEnd": weekEnd.clone(),
                "category": category,
            });
        });
        // Sanity check that the time spent adds up to an entire week.
        assert(totalSeconds == secondsInADay * 7);
    };
    for (var i = 0; i < 7; i++) {
        tallyEvents(days[i], 1, categToSeconds);
    }
    saveWeek();
    for(var i = 7; i < days.length; i++) {
        weekIndex += 1;
        weekBegin.add(1, 'day');
        weekEnd.add(1, 'day');
        tallyEvents(days[i - 7], -1, categToSeconds);
        tallyEvents(days[i], 1, categToSeconds);
        saveWeek();
    }
    return layers;
}

function main() {
    // Parse ISO-8601 datetimes into Moment objects.
    for (var i = 0; i < data.events.length; i++) {
        data.events[i].begin = moment(data.events[i].begin);
        data.events[i].end = moment(data.events[i].end);
    }

    categoryColor = makeColorFunc(data);
    createSunburst(buildPartitionData(data));
    createStreamGraph(buildStackData(data));
}

main();
