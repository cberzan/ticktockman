var secondsInADay = 86400.0;

// Build a color scheme for the given tree of categories.
// Returns a function color that can be called like color(category) or
// color(category, depth).
function makeColorFunc(categories) {
    var topLevelCategs = _.map(categories.children, function(node) {
        return node.name;
    });
    console.log(topLevelCategs);
    var categToTopLevelCateg = {};
    _.map(getRootToLeafPaths(categories), function(path) {
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

function main() {
    // Parse ISO-8601 datetimes into Moment objects.
    for (var i = 0; i < data.events.length; i++) {
        data.events[i].begin = moment(data.events[i].begin);
        data.events[i].end = moment(data.events[i].end);
    }

    // Build color scheme.
    var categoryColor = makeColorFunc(data.categories);

    // Split events at midnight, and group events into days.
    var splitEvents = _.flatten(_.map(data.events, splitEventAtMidnight));
    var days = groupEventsIntoDays(splitEvents);

    // Pad incomplete days so that each day covers exactly 24h,
    // from midnight to midnight.
    if (days.length > 0) {
        var firstEvent = _.first(_.first(days));
        if (!isMidnight(firstEvent.begin)) {
            _.first(days).unshift({
                "category": "untracked",
                "begin": firstEvent.begin.clone().hour(0).minute(0),
                "end": firstEvent.begin.clone(),
            });
        }
        var lastEvent = _.last(_.last(days));
        if (!isMidnight(lastEvent.end)) {
            _.last(days).push({
                "category": "untracked",
                "begin": lastEvent.end.clone(),
                "end": lastEvent.end.clone().hour(0).minute(0).add(1, 'day'),
            });
        }
    }

    // Sanity check days.
    _.each(days, function(day) {
        // The day's events must cover a 24h stretch from midnight to midnight.
        assert(day.length > 0);
        assert(isMidnight(_.first(day).begin));
        assert(isMidnight(_.last(day).end));

        // The events in the day must add up to a full day.
        var totalSeconds = _.reduce(day, function(memo, evnt) {
            assert(durationSeconds(evnt) >= 0);
            return memo + durationSeconds(evnt);
        }, 0);
        // TODO: unit test for this DST logic
        var targetSeconds = secondsInADay;
        if (_.first(day).begin.isDST() && !_.last(day).end.isDST()) {
            targetSeconds += 60 * 60;
        } else if (!_.first(day).begin.isDST() && _.last(day).end.isDST()) {
            targetSeconds -= 60 * 60;
        }
        assert(totalSeconds == targetSeconds);
    });

    // Build each-day visualization.
    var eachday = makeEachday(
        data.categories, days,
        $("#eachday"), categoryColor);

    // Build sunburst visualization.
    var sunburstAll = makeSunburst(
        data.categories, data.events,
        $("#sunburst_all"), categoryColor);

    // After createSunburst runs, the nodes in partitionData are ordered by
    // size. We take advantage of this to display the categories in the
    // streamgraph in the same order.
    var orderedLeafCategories = _.map(
        getLeaves(sunburstAll.partitionData),
        function(leaf) { return leaf.name; });
    orderedLeafCategories.push("untracked");

    /*
    // Build streamgraph visualization.
    var streamgraphAll = makeStreamgraph(
        data.categories, days,
        $("#streamgraph_all"), orderedLeafCategories, categoryColor);
    */
}

main();
