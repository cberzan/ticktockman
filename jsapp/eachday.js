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
    V.margin = {top: 0, right: 20, bottom: 40, left: 90};
    V.width = 730 - V.margin.left - V.margin.right;
    V.height = days.length * 20 - V.margin.top - V.margin.bottom;

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
        .attr("width", V.width + V.margin.left + V.margin.right)
        .attr("height", V.height + V.margin.top + V.margin.bottom)
      .append("g")
        .attr("transform",
            "translate(" + V.margin.left + "," + V.margin.top + ")");

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

    // Add an x axis showing the time of day.
    V.xAxis = d3.svg.axis()
        .scale(V.x)
        // .tickPadding(6)
        .tickValues(_.map([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
            function(hour) { return hour * 60 * 60; }))
        .tickFormat(function(seconds) {
            var duration = moment.duration(seconds, 'seconds');
            return (duration.hours() + ":"
                + d3.format("02d")(duration.minutes()));
        })
        .orient("bottomk");
    V.svg.append("g")
        .attr("class", "xaxis")
        .attr("transform", "translate(0," + V.height + ")")
        .call(V.xAxis);

    // Add an y axis showing the date.
    V.yAxis = d3.svg.axis()
        .scale(V.y)
        .tickSize(0)
        .tickPadding(6)
        .tickFormat(function(i) {
            return V.data[i].date.format("YYYY MMM D");
        })
        .orient("left");
    V.svg.append("g")
        .attr("class", "yaxis")
        .call(V.yAxis);

    return V;
}
