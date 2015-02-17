// Build a oneday visualization of the given day in the given div.
// jqDiv must be a jQuery selector.
function makeOneday(day, jqDiv) {
    // V is the visualization object that we will return.
    var V = {};
    V.jqDiv = jqDiv;
    V.d3Div = d3.select(jqDiv[0]);

    // Set modal title.
    $(V.jqDiv).find(".modal-title").text(
        "Details for " + day.date.format("dddd, MMMM D, YYYY"));

    // Clear existing svg, and rebuild it.
    V.svg = V.d3Div.select("svg.inmodal");
    V.svg.selectAll("*").remove();
    V.width = 540;
    V.barWidth = 200;
    V.height = day.events.length * 20;
    V.svg
        .attr("width", V.width)
        .attr("height", V.height)
      .append("g");

    // Scales.
    // We use the event's beginSec as the key for the y scale's domain.
    V.y = d3.scale.ordinal()
        .domain(_.map(day.events, function(d) { return d.beginSec; }))
        .rangeRoundBands([0, V.height], .08, 0);
    V.rectWidth = d3.scale.linear()
        .domain([0, secondsInADay / 3])
        .range([0, V.barWidth]);

    // Each event becomes a row, which is a <g> element.
    V.svg.selectAll(".event")
        .data(day.events)
      .enter().append("g")
        .attr("class", "event")
        .attr("transform", function(d) {
            return "translate(0, " + V.y(d.beginSec) + ")";
        });

    // Inside that <g> element we add a rectangle and text.
    V.svg.selectAll(".event")
      .append("rect")
        .attr("height", V.y.rangeBand())
        .attr("x", function(d) {
            return V.barWidth - V.rectWidth(d.endSec - d.beginSec);
        })
        .attr("width", function(d) {
            return V.rectWidth(d.endSec - d.beginSec);
        })
        .style("fill", function(d) { return d.category.color; });
    V.svg.selectAll(".event")
      .append("text")
        .attr("x", V.barWidth + 4)
        .attr("y", 16)
        .text(function(d) {
            return (d.begin.format("H:mm") + " - " + d.end.format("H:mm")
                + " (" + humanizeSeconds(d.endSec - d.beginSec) + ") "
                + d.category.name);
            // TODO include comments, and support long lines somehow
        });

    return V;
}
