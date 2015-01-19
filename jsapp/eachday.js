// Build an eachday visualization of the given days in the given div.
// Div must be a jQuery selector. The div will be emptied.
// Color will be called like this: color(leaf_category).
function makeEachday(categories, days, div, color) {
    // Copy skeleton from the template.
    div.empty();
    div.append($("#eachday_template").children().clone());

    // V is the visualization object that we will return.
    var V = {};
    V.div = d3.select(div[0]);
    V.width = 730;
    V.height = days.length * 20;

    // Fill in the description text.
    V.div.select(".num_days").text(days.length);
    V.div.select(".first_date").text(
        days[0][0].begin.format("YYYY MMM D"));
    V.div.select(".last_date").text(
        days[days.length - 1][0].end.format("YYYY MMM D"));

    // Build the data for the visualization.
    // V.data is an array of days. Each day is an object with the following
    // properties: index, date, events. Each event is an object with the
    // following properties: beginSec, endSec, category.
    var index = -1;
    V.data = _.map(days, function(events) {
        // Convert events to the required format.
        var dayBegin = events[0].begin;
        var convertedEvents = _.map(events, function(evnt) {
            return {
                'beginSec': evnt.begin.diff(dayBegin, 'seconds'),
                'endSec': evnt.end.diff(dayBegin, 'seconds'),
                'category': evnt.category,
            };
        });

        index += 1;
        return {
            'index': index,
            'date': events[0].begin,
            'events': convertedEvents,
        };
    });

    // Scales. This currently misbehaves for DST, producing a slightly longer
    // or a slightly shorter day. Not sure how to fix it in a non-ugly way.
    V.x = d3.scale.linear()
        .domain([0, secondsInADay])
        .range([0, V.width]);
    V.y = d3.scale.ordinal()
        .domain(_.map(V.data, function(d) { return d.index; }))
        .rangeRoundBands([0, V.height], .08);

    // Init svg.
    V.svg = V.div.select("svg")
        .attr("width", V.width)
        .attr("height", V.height);

    // Each day becomes a row, which is a <g> element.
    V.days = V.svg.selectAll(".day")
        .data(V.data)
      .enter().append("g")
        .attr("class", "g")
        .attr("transform", function(d) {
            return "translate(0, " + V.y(d.index) + ")";
        });

    // Each event becomes a rectangle within that day's row.
    V.days.selectAll("rect")
        .data(function(d) { return d.events; })
      .enter().append("rect")
        .attr("height", V.y.rangeBand())
        .attr("x", function(d) { return V.x(d.beginSec); })
        .attr("width", function(d) { return V.x(d.endSec) - V.x(d.beginSec); })
        .style("fill", function(d) { return color(d.category); });


    return V;
}
