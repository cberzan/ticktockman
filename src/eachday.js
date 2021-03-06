"use strict";

var d3 = require("d3");
var moment = require("moment");
var _ = require("underscore");

var legend = require("./legend.js");
var oneday = require("./oneday.js");
var ticktock = require("./ticktock.js");

// Build an eachday visualization of the given days in the given div.
// jqDiv must be a jQuery selector. The div will be emptied.
exports.makeViz = function(categories, days, jqDiv) {
    // V is the visualization object that we will return.
    var V = {};
    V.jqDiv = jqDiv;
    V.d3Div = d3.select(jqDiv[0]);

    // Copy skeleton from the template.
    jqDiv.empty();
    jqDiv.append($("#eachday_template").children().clone());

    // Build legend.
    // TODO: position it better w.r.t. the rest of the visualization.
    var legendDiv = jqDiv.find("div.legend_container");
    V.legend = legend.makeViz(categories, legendDiv);

    // Dimensions.
    V.main_margin = {top: 0, right: 20, bottom: 0, left: 120};
    V.main_width = 720 - V.main_margin.left - V.main_margin.right;
    V.main_height = days.length * 20;
    V.footer_margin = {top: 0, right: 20, bottom: 0, left: 120};
    V.footer_width = V.main_width;
    V.footer_height = 40;

    // Fill in the description text.
    V.d3Div.select(".num_days").text(days.length);
    V.d3Div.select(".first_date").text(
        days[0][0].begin.format("YYYY MMM D"));
    V.d3Div.select(".last_date").text(
        days[days.length - 1][0].end.format("YYYY MMM D"));

    // Build the data for the visualization.
    // V.data is an array of days. Each day is an object with the following
    // properties: index, date, events. Each event is an object with the
    // following properties: begin, beginSec, end, endSec, category.
    var index = -1;
    V.data = _.map(days, function(events) {
        // Convert events to the required format.
        var dayBegin = events[0].begin;
        var convertedEvents = _.map(events, function(evnt) {
            return {
                'begin': evnt.begin,
                'beginSec': evnt.begin.diff(dayBegin, 'seconds'),
                'end': evnt.end,
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
        .domain([0, ticktock.secondsInADay])
        .range([0, V.main_width]);
    V.y = d3.scale.ordinal()
        .domain(_.map(V.data, function(d) { return d.index; }))
        .rangeRoundBands([0, V.main_height], 0.08, 0);

    // Init svg.
    V.svg_main = V.d3Div.select("svg.main")
        .attr("width", V.main_width + V.main_margin.left + V.main_margin.right)
        .attr("height", V.main_height + V.main_margin.top + V.main_margin.bottom)
      .append("g")
        .attr("transform",
            "translate(" + V.main_margin.left + "," + V.main_margin.top + ")");

    // Each day becomes a row, which is a <g> element.
    V.days = V.svg_main.selectAll(".day")
        .data(V.data)
      .enter().append("g")
        .attr("class", "g")
        .attr("transform", function(d) {
            return "translate(0, " + V.y(d.index) + ")";
        })
        .on("click", function(d) { showDayModal(V, d); });

    // Each event becomes a rectangle within that day's row.
    V.days.selectAll("rect")
        .data(function(d) { return d.events; })
      .enter().append("rect")
        .attr("height", V.y.rangeBand())
        .attr("x", function(d) { return V.x(d.beginSec); })
        .attr("width", function(d) { return V.x(d.endSec) - V.x(d.beginSec); })
        .style("fill", function(d) { return d.category.topLevel.color; })
      .append("title")  // tooltip
        .text(function(d) {
            return (d.category.name +
                " (" + ticktock.humanizeSeconds(d.endSec - d.beginSec) + ")");
        });

    // Add a footer with an x axis showing the time of day.
    // FIXME: margin etc not DRY
    V.svg_footer = V.d3Div.select("svg.footer")
        .attr("width",
            V.footer_width + V.footer_margin.left + V.footer_margin.right)
        .attr("height",
            V.footer_height + V.footer_margin.top + V.footer_margin.bottom)
      .append("g")
        .attr("transform",
            "translate(" + V.footer_margin.left + "," +
            V.footer_margin.top + ")");
    V.xAxis = d3.svg.axis()
        .scale(V.x)
        .tickValues(_.map([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
            function(hour) { return hour * 60 * 60; }))
        .tickFormat(function(seconds) {
            var duration = moment.duration(seconds, 'seconds');
            return (duration.hours() + ":" +
                d3.format("02d")(duration.minutes()));
        })
        .orient("bottomk");
    V.svg_footer.append("g")
        .attr("class", "xaxis")
        .call(V.xAxis);

    // Add an y axis showing the date.
    V.yAxis = d3.svg.axis()
        .scale(V.y)
        .tickSize(0)
        .tickPadding(6)
        .tickFormat(function(i) {
            return V.data[i].date.format("ddd YYYY MMM D");
        })
        .orient("left");
    V.svg_main.append("g")
        .attr("class", "yaxis")
        .call(V.yAxis);

    return V;
};

var showDayModal = function(V, day) {
    var modalDiv = $(V.jqDiv).find(".modal");
    V.oneday = oneday.makeViz(day, modalDiv);
    modalDiv.modal("show");
};
