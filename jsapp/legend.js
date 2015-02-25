var ticktockman = (function (my) {
"use strict";

// Build a legend in the given div showing the top-level categories.
// Div must be a jQuery selector. The div will be emptied.
my.makeLegend = function(categories, div) {
    // Copy skeleton from the template.
    div.empty();
    div.append($("#legend_template").children().clone());

    // V is the visualization object that we will return.
    var V = {};
    V.numCols = 4;

    // Build the data for the visualization.
    // We display the top-level categories, ordered by their id.
    V.topLevelCategs = _.sortBy(categories.root.children, function(category) {
        return category.id;
    });
    _.each(V.topLevelCategs, function(category, index) {
        category.row = Math.floor(index / V.numCols);
        category.col = index % V.numCols;
    });

    // Dimensions.
    V.div = d3.select(div[0]);
    V.width = 730;
    V.numRows = Math.ceil(V.topLevelCategs.length / V.numCols);
    V.rowHeight = 25;
    V.height = V.numRows * V.rowHeight;

    // Scales.
    V.x = d3.scale.linear()
        .domain([0, V.numCols])
        .range([0, V.width]);
    V.y = d3.scale.linear()
        .domain([0, V.numRows])
        .range([0, V.height]);

    // Init svg.
    V.svg = V.div.select("svg")
        .attr("width", V.width)
        .attr("height", V.height)
      .append("g");

    // Each category becomes a <g> element.
    V.categories = V.svg.selectAll(".category")
        .data(V.topLevelCategs)
      .enter().append("g")
        .attr("class", "category")
        .attr("transform", function(d) {
            return "translate(" + V.x(d.col) + ", " + V.y(d.row) + ")";
        });

    // Inside that <g> element we add a colored circle and text.
    V.svg.selectAll(".category")
      .append("circle")
        .attr("cx", V.rowHeight / 2)
        .attr("cy", V.rowHeight / 2)
        .attr("r", V.rowHeight / 2 - 2)
        .attr("fill", function(d) { return d.color; });
    V.svg.selectAll(".category")
      .append("text")
        .attr("x", V.rowHeight + 5)
        .attr("y", V.rowHeight / 2 + 5)
        .text(function(d) { return d.name; });

    return V;
};

return my;
}(ticktockman || {}));
