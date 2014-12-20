// Build a streamgraph visualization of the given events in the given div.
// Div must be a jQuery selector. The div will be emptied.
// orderedLeafCategories is an array of category names.
// Color will be called like this: color(category, depth).
function makeStreamgraph(
        categories, events, div, orderedLeafCategories, categoryColor) {
    // Copy skeleton from the template.
    div.empty();
    div.append($("#streamgraph_template").children().clone());

    // V is the visualization object that we will return.
    var V = {};
    V.div = d3.select(div[0]);
    V.width = 1300;
    V.height = 400;
    V.stackData = buildStackData(orderedLeafCategories, events);

    V.x = d3.scale.linear()
        .domain([0, V.stackData[0].length - 1])
        .range([0, V.width]);

    V.y = d3.scale.linear()
        .domain([0, 604800])
        .range([V.height, 0]);

    V.area = d3.svg.area()
        .x(function(d) { return V.x(d.x); })
        .y0(function(d) { return V.y(d.y0); })
        .y1(function(d) { return V.y(d.y0 + d.y); });

    V.svg = V.div.select("svg")
        .attr("width", V.width)
        .attr("height", V.height);

    V.layers = d3.layout.stack()(V.stackData);

    V.svg.selectAll("path")
        .data(V.layers)
        .enter().append("path")
        .attr("d", V.area)
        .style("fill", function(d) { return categoryColor(d[0].category); });

    return V;
}

// Take categories and events and return an object suitable for
// d3.stack(). The returned object is a 2-dimensional array of objects that
// have x, y, y0, weekBegin, weekEnd and category properties.
function buildStackData(orderedLeafCategories, events) {
    // Split events crossing midnight into pieces that do not cross midnight.
    var splitEvents = _.flatten(_.map(events, splitEventAtMidnight));

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
    _.each(orderedLeafCategories, function(category) {
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
