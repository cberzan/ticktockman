// Build a sunburst visualization of the given days in the given div.
// Div must be a jQuery selector. The div will be emptied.
function makeSunburst(categories, days, div) {
    // Copy skeleton from the template.
    div.empty();
    div.append($("#sunburst_template").children().clone());

    var sunburst = {};
    sunburst.div = d3.select(div[0]);

    // Dimensions.
    sunburst.width = 730;
    sunburst.height = 600;
    sunburst.radius = 300;

    sunburst.container = sunburst.div.select("svg")
        .attr("width", sunburst.width)
        .attr("height", sunburst.height)
      .append("svg:g")
        .attr("class", "container")
        .attr("transform", "translate(" + sunburst.width / 2
            + "," + sunburst.height / 2 + ")");

    sunburst.partition = d3.layout.partition()
        .size([2 * Math.PI, sunburst.radius * sunburst.radius])
        .value(function(d) { return d.size; });

    sunburst.arc = d3.svg.arc()
        .startAngle(function(d) { return d.x; })
        .endAngle(function(d) { return d.x + d.dx; })
        .innerRadius(function(d) { return Math.sqrt(d.y); })
        .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

    // Bounding circle underneath the sunburst, to make it easier to detect
    // when the mouse leaves the parent g.
    sunburst.container.append("svg:circle")
        .attr("r", sunburst.radius)
        .style("opacity", 0);

    sunburst.partitionData = buildPartitionData(categories, days);

    // For efficiency, filter nodes to keep only those large enough to see.
    sunburst.nodes = sunburst.partition.nodes(sunburst.partitionData)
        .filter(function(d) {
            return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
        });

    sunburst.path = sunburst.container
      .data([sunburst.partitionData]).selectAll("path")
        .data(sunburst.nodes)
        .enter().append("svg:path")
        .attr("display", function(d) { return d.depth ? null : "none"; })
        .attr("d", sunburst.arc)
        .attr("fill-rule", "evenodd")
        .style("fill", function(d) { return d.category.color; })
        .style("opacity", 1)
        .on("mouseover", function(d) { sunburstMouseover(sunburst, d); });

    // Add the mouseleave handler to the bounding circle.
    sunburst.div.select(".container").on("mouseleave",
        function(d) { sunburstMouseleave(sunburst, d); });

    // Total size (total number of seconds tracked).
    sunburst.totalSize = sunburst.path.node().__data__.value;
    sunburst.div.select(".total_time").text(
        humanizeSeconds(sunburst.totalSize));

    return sunburst;
}

// Take categories and days and return an object suitable for
// d3.partition.nodes(). The returned object is a tree of categories, where
// each node has a "name", "category", and "children" property. "children" is
// an array of nodes. Each leaf has a "size" property, indicating the total
// number of seconds spent in that leaf category.
function buildPartitionData(categories, days) {
    // Have to copy categories.root tree into a representation where "children"
    // is an array instead of an object.
    var newTree = traverseTree(categories.root,
        function(node, childResults) {
            return {
                "name": node.name,
                "category": node,
                "children": childResults,
            };
        });
    var categIdToNewNode = {};
    traverseTree(newTree, function(newNode) {
        categIdToNewNode[newNode.category.id] = newNode;
    });

    // Sum up time spent at the leaves.
    _.each(events, function(evnt) {
        if (evnt.category.name === "untracked") {
            // newTree contains "untracked", but we leave its size as 0.
            return;
        }
        if (_.size(evnt.category.children) > 0) {
            // FIXME: Check how d3.partition.nodes() deals with non-zero size
            // attributes on non-leaf nodes. Support events whose category is
            // not a leaf.
            throw new Error("category " + evnt.category + " is not a leaf");
        }
        var newNode = categIdToNewNode[evnt.category.id];
        if (!_.has(newNode, "size")) {
            newNode.size = 0;
        }
        newNode.size += durationSeconds(evnt);
    });
    return newTree;
}

// Fade all but the current sequence.
function sunburstMouseover(sunburst, d) {
  sunburst.div.select(".category").text(d.name);

  var percOfParent = 100 * d.value / d.parent.value;
  var percOfParentStr = humanizePercent(percOfParent);
  sunburst.div.select(".perc_of_parent").text(percOfParentStr);

  var percOfTotal = (100 * d.value / sunburst.totalSize).toPrecision(3);
  var percOfTotalStr = percOfTotal + "%";
  if (percOfTotal < 0.1) {
    percOfTotalStr = "< 0.1%";
  }
  sunburst.div.select(".perc_of_total").text(percOfTotalStr);

  var secondsSpent = d.value;
  var timeSpentString = humanizeSeconds(secondsSpent);
  sunburst.div.select(".timespent").text(timeSpentString);

  var secondsInADay = 86400.0;
  var secondsPerDay = secondsInADay * d.value / sunburst.totalSize;
  var perDayString = humanizeSeconds(secondsPerDay);
  sunburst.div.select(".perday").text(perDayString);

  sunburst.div.select(".hud").style("visibility", "hidden");
  sunburst.div.select(".hud_hover").style("visibility", "visible");

  var sequenceArray = getAncestors(d);

  // Fade all the segments.
  sunburst.container.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  sunburst.container.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function sunburstMouseleave(sunburst, d) {

  // Set each segment to full opacity.
  sunburst.container.selectAll("path")
      .style("opacity", 1);

  sunburst.div.select(".hud").style("visibility", "visible");
  sunburst.div.select(".hud_hover").style("visibility", "hidden");
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
