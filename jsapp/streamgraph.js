// Build a streamgraph visualization of the given days in the given div.
// Div must be a jQuery selector. The div will be emptied.
// orderedLeafCategories is an array of categories.
// Color will be called like this: color(category, depth).
function makeStreamgraph(categories, days, div, orderedLeafCategories) {
    // Copy skeleton from the template.
    div.empty();
    div.append($("#streamgraph_template").children().clone());

    // V is the visualization object that we will return.
    var V = {};
    V.div = d3.select(div[0]);
    V.width = 730;
    V.height = 500;
    V.stackData = buildStackData(categories, orderedLeafCategories, days);

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
        .style("fill", function(d) { return d[0].category.color; })
        .on("mouseover", function(d) { streamgraphMouseover(V, d); })
        .on("mousemove", function(d) { streamgraphMousemove(V, d); });

    V.svg.on("mouseleave", function() { streamgraphMouseleave(V); });

    return V;
}

// Take categories and days and return an object suitable for
// d3.stack(). The returned object is a 2-dimensional array of objects that
// have x, y, y0, weekBegin, weekEnd and category properties.
function buildStackData(categories, orderedLeafCategories, days) {
    // Need at least a week's worth of data.
    if (days.length < 7) {
        // TODO UI
        console.log("not enough data");
        return;
    }

    // Build layers array.
    var layers = [];
    var categIdToLayer = {};
    var categIdToSeconds = {};
    _.each(orderedLeafCategories, function(category) {
        layer = [];
        layers.push(layer);
        categIdToLayer[category.id] = layer;
        categIdToSeconds[category.id] = 0;
    });
    var weekIndex = 0;
    var weekBegin = days[0][0].begin.clone();
    var weekEnd = days[6][days[6].length - 1].end.clone();
    var saveWeek = function() {
        var totalSeconds = 0;
        _.each(categIdToLayer, function(layer, categId) {
            totalSeconds += categIdToSeconds[categId];
            layer.push({
                "x": weekIndex,
                "y": categIdToSeconds[categId],
                "y0": 0,
                "weekBegin": weekBegin.clone(),
                "weekEnd": weekEnd.clone(),
                "category": categories.list[categId],
            });
        });
        // Sanity check that the time spent adds up to an entire week.
        var targetSeconds = getSecondsInWeek(weekBegin);
        assert(totalSeconds == targetSeconds);
    };
    for (var i = 0; i < 7; i++) {
        tallyEvents(days[i], 1, categIdToSeconds);
    }
    saveWeek();
    for(var i = 7; i < days.length; i++) {
        weekIndex += 1;
        weekBegin.add(1, 'day');
        weekEnd.add(1, 'day');
        tallyEvents(days[i - 7], -1, categIdToSeconds);
        tallyEvents(days[i], 1, categIdToSeconds);
        saveWeek();
    }
    return layers;
}

// Add each event's duration in seconds, multiplied by coef, to the event's
// category in categIdToSeconds. Assumes categIdToSeconds has a property for
// every category.
function tallyEvents(events, coef, categIdToSeconds) {
    _.each(events, function(evnt) {
        assert(_.has(categIdToSeconds, evnt.category.id));
        assert(durationSeconds(evnt) >= 0);
        categIdToSeconds[evnt.category.id] += durationSeconds(evnt) * coef;
    });
}

// Update HUD.
function streamgraphMousemove(V, d) {
    var position = d3.mouse(V.svg.node());
    var weekIndex = Math.round(V.x.invert(position[0]));
    weekIndex = Math.max(weekIndex, 0);
    weekIndex = Math.min(weekIndex, d.length - 1);
    var datum = d[weekIndex];
    V.div.select(".timespent").text(humanizeSeconds(datum.y));
    V.div.select(".perday").text(humanizeSeconds(datum.y / 7.0));
    V.div.select(".week_begin").text(datum.weekBegin.format("YYYY MMM D"));
    V.div.select(".week_end").text(datum.weekEnd.format("YYYY MMM D"));
}

// Fade all layers except the one hovered over.
function streamgraphMouseover(V, d) {
    V.svg.selectAll("path")
        .style("opacity", 0.3);

    V.svg.selectAll("path")
        .filter(function(node) {
            return node[0].category.id == d[0].category.id; })
        .style("opacity", 1);

    V.div.select(".category").text(d[0].category.name);
    V.div.select(".hud_hover").style("visibility", "visible");
}

// Unfade all layers.
function streamgraphMouseleave(V) {
    V.svg.selectAll("path")
        .style("opacity", 1);
    V.div.select(".hud_hover").style("visibility", "hidden");
}
