var secondsInADay = 86400.0;

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

// Take an allData object and return an object suitable for
// d3.stack(). The returned object is a 2-dimensional array of objects that
// have x, y, y0, weekBegin, weekEnd and category properties.
function buildStackData(allData, orderedLeafCategories) {
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

function main() {
    // Parse ISO-8601 datetimes into Moment objects.
    for (var i = 0; i < data.events.length; i++) {
        data.events[i].begin = moment(data.events[i].begin);
        data.events[i].end = moment(data.events[i].end);
    }

    var allData = data;
    var categoryColor = makeColorFunc(data);

    // Build sunburst visualization.
    var sunburst1 = makeSunburst(
        allData.categories, allData.events,
        $("#sunburst1"), categoryColor);
    var sunburst2 = makeSunburst(
        allData.categories, allData.events,
        $("#sunburst2"), categoryColor);

    // Build streamgraph visualization.
    // After createSunburst runs, the nodes in partitionData are ordered by
    // size. We take advantage of this to display the categories in the
    // streamgraph in the same order.
    var orderedLeafCategories = _.map(getLeaves(partitionData), function(leaf) {
        return leaf.name;
    });
    orderedLeafCategories.push("untracked");
    var stackData = buildStackData(data, orderedLeafCategories);
    createStreamGraph(stackData);
}

main();
