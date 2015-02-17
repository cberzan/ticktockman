var secondsInADay = 86400.0;

// Helper for createColors(): recursively set the colors for the given node.
function assignColors(node, color) {
    node.color = color;
    var childColor = color.brighter(0.5);
    _.each(node.children, function(child) {
        assignColors(child, childColor);
    });
}

// Build color scheme, augmenting each category with a "color" key.
function createColors(categories) {
    var topLevelCategoryIds = [];
    _.each(categories.root.children, function(node) {
        if (node.label != "untracked") {
            topLevelCategoryIds.push(node.id);
        }
    });
    var hueScale = d3.scale.ordinal()
        .domain(topLevelCategoryIds)
        .rangePoints([0, 360], 1);
    var saturation = 0.5;
    var lightness = 0.5;
    _.each(categories.root.children, function(node) {
        var color = d3.hsl(0, 0, 0);
        if (node.name != "untracked") {
            color = d3.hsl(hueScale(node.id), saturation, lightness);
        }
        assignColors(node, color);
    });
}

function main() {
    events = data;

    // Parse ISO-8601 datetimes into Moment objects.
    for (var i = 0; i < events.length; i++) {
        events[i].begin = moment(events[i].begin);
        events[i].end = moment(events[i].end);
    }

    // Build categories data structure, and set the category for each event.
    // categories.root = {"id": 1, "name": "root", children: {...}}
    // Invariant: node.children[name].name == name.
    // categories.list = [null, {"id": 1, ...}, {"id": 2, ...}, ...]
    // Invariant: categories.list[id].id == id.
    var rootCateg = {"id": 0, "name": "root", "children": {}};
    var categories = {'root': rootCateg, 'list': [rootCateg]};
    var nextId = 1;
    _.each(events, function(evnt) {
        // Traverse category path, adding missing categories along the way.
        var curNode = categories.root;
        _.each(evnt.category, function(crumb) {
            if (!_.has(curNode.children, crumb)) {
                var newCateg = {"id": nextId, "name": crumb, "children": {}};
                curNode.children[crumb] = newCateg;
                categories.list.push(newCateg);
                nextId++;
            }
            curNode = curNode.children[crumb];
        });
        // Set the event's category to the rich object just found / created.
        evnt.category = curNode;
    });
    createColors(categories);

    // Split events at midnight, and group events into days.
    var splitEvents = _.flatten(_.map(events, splitEventAtMidnight));
    var days = groupEventsIntoDays(splitEvents);

    // Pad incomplete days so that each day covers exactly 24h,
    // from midnight to midnight.
    if (days.length > 0) {
        var firstEvent = _.first(_.first(days));
        if (!isMidnight(firstEvent.begin)) {
            _.first(days).unshift({
                "category": categories.root.children["untracked"],
                "begin": firstEvent.begin.clone().hour(0).minute(0),
                "end": firstEvent.begin.clone(),
            });
        }
        var lastEvent = _.last(_.last(days));
        if (!isMidnight(lastEvent.end)) {
            _.last(days).push({
                "category": categories.root.children["untracked"],
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
    var eachday = makeEachday(categories, days, $("#eachday"));
    window.eachday = eachday;  // DEBUG

    // Build sunburst visualization.
    var sunburstAll = makeSunburst(categories, days, $("#sunburst_all"));

    /*
    // After createSunburst runs, the nodes in partitionData are ordered by
    // size. We take advantage of this to display the categories in the
    // streamgraph in the same order.
    var orderedLeafCategories = _.map(
        getLeaves(sunburstAll.partitionData),
        function(leaf) { return leaf.name; });
    orderedLeafCategories.push("untracked");
    */

    /*
    // Build streamgraph visualization.
    var streamgraphAll = makeStreamgraph(
        data.categories, days,
        $("#streamgraph_all"), orderedLeafCategories, categoryColor);
    */
}

main();
