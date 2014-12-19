// Dimensions of sunburst.
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;

// Mapping of step names to colors.
var colors = {
  "home": "#5687d1",
  "product": "#7b615c",
  "search": "#de783b",
  "account": "#6ab975",
  "other": "#a173d1",
  "end": "#bbbbbb"
};

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
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

// Load data.
d3.json("out.json", function(json) {
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

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
      .style("fill", function(d) { return colors[d.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;

  d3.select("#total_time").text(humanizeSeconds(totalSize));
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

  d3.select("#explanation_total").style("visibility", "hidden");
  d3.select("#explanation").style("visibility", "");

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

  d3.select("#explanation_total").style("visibility", "");
  d3.select("#explanation").style("visibility", "hidden");
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
