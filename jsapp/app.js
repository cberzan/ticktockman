var ticktockman = (function (my) {
"use strict";

// Helper for createColors(): recursively set the colors for the given node.
my.assignColors = function(node, color) {
    node.color = color;
    var childColor = color.brighter(0.5);
    _.each(node.children, function(child) {
        my.assignColors(child, childColor);
    });
};

// Build color scheme, augmenting each category with a "color" key.
my.createColors = function(categories) {
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
        my.assignColors(node, color);
    });
};

/*
 * Validate raw events, and convert them to the main tocktockman data
 * structures. Returns an object {"categories": categories, "days": days}.
 * Raises an exception if the given data is invalid.
 *
 * The input argument `events` is an array of events covering a contiguous
 * interval of time without overlapping. Each event has the following
 * properties:
 * - begin (the event's start time as an ISO-8601 string)
 * - end (the event's end time as an ISO-8601 string)
 * - category (an array representing the event's hierarchical category, e.g.
 *   ["work", "side_projects", "ticktockman"] or ["work", "research",
 *   "lit_review"])
 * - comment (free-form string; optional)
 *
 * The returned `categories` object represents the hierarchy of event
 * categories. Each category is an object with the following properties:
 * - id (integer)
 * - name (string)
 * - children (map from child name to category)
 * - color (d3 color object)
 * - topLevel (the farthest ancestor of this category, directly under root)
 *
 * The categories can be accessed by navigating the tree, e.g.
 * `categories.root.children["work"].children["side_projects"]`,
 * or directly by id, e.g. `categories.list[123]`.
 *
 * Invariants:
 * - `node.children[name].name == name`
 * - `categories.list[id].id == id`
 *
 * The returned `days` object is an array, where each element represents the
 * events for exactly one day. The events in a day cover a time interval from
 * midnight to midnight, without gaps or overlaps. Each event is an object with
 * the following properties:
 * - category (a category from the `categories` data structure)
 * - begin (a Moment object)
 * - end (a Moment object)
 * - comment (string or null)
 *
 * Invariants:
 * - `days.length >= 1`
 * - `isMidnight(day[0].begin)`
 * - `isMidnight(day[day.length - 1].end)`
 * - `day[i].end == day[i+1].begin`
 */
my.preprocessData = function(events) {
    // Error out if we have no events.
    if (events.length === 0) {
        throw new Error("no events provided");
    }

    // TODO: need much better input validation. Currently if the data is
    // malformed, something might crash much later, giving a misleading error
    // message.

    // Parse ISO-8601 datetimes into Moment objects.
    for (var i = 0; i < events.length; i++) {
        events[i].begin = moment(events[i].begin);
        events[i].end = moment(events[i].end);
    }

    // Build categories data structure, and set the category for each event.
    // We add a default "untracked" category, used for padding days to 24h.
    var rootCateg = {
        "id": 0,
        "name": "root",
        "children": {},
        "topLevel": null,
    };
    var untrackedCateg = {
        "id": 1,
        "name": "untracked",
        "children": {},
        "topLevel": rootCateg,
    };
    rootCateg.children.untracked = untrackedCateg;
    var categories = {
        'root': rootCateg,
        'list': [rootCateg, untrackedCateg]
    };
    var nextId = 2;
    _.each(events, function(evnt) {
        // Traverse category path, adding missing categories along the way.
        var curNode = categories.root;
        var curTopLevel = categories.root;
        _.each(evnt.category, function(crumb) {
            if (!_.has(curNode.children, crumb)) {
                var newCateg = {
                    "id": nextId,
                    "name": crumb,
                    "children": {},
                    "topLevel": curTopLevel,
                };
                curNode.children[crumb] = newCateg;
                categories.list.push(newCateg);
                nextId++;
            }
            curNode = curNode.children[crumb];
            if (curTopLevel == categories.root) {
                curTopLevel = curNode;
                curNode.topLevel = curNode;
            }
        });
        // Set the event's category to the rich object just found / created.
        evnt.category = curNode;
    });

    // Create color scheme.
    my.createColors(categories);

    // Split events at midnight, and group events into days.
    var splitEvents = _.flatten(_.map(events, my.splitEventAtMidnight));
    var days = my.groupEventsIntoDays(splitEvents);

    // Pad incomplete days so that each day covers exactly 24h,
    // from midnight to midnight.
    my.assert (days.length > 0);
    var firstEvent = _.first(_.first(days));
    if (!my.isMidnight(firstEvent.begin)) {
        _.first(days).unshift({
            "category": categories.root.children.untracked,
            "begin": firstEvent.begin.clone().hour(0).minute(0),
            "end": firstEvent.begin.clone(),
        });
    }
    var lastEvent = _.last(_.last(days));
    if (!my.isMidnight(lastEvent.end)) {
        _.last(days).push({
            "category": categories.root.children.untracked,
            "begin": lastEvent.end.clone(),
            "end": lastEvent.end.clone().hour(0).minute(0).add(1, 'day'),
        });
    }

    // Sanity check days.
    _.each(days, function(day) {
        // The day's events must cover a 24h stretch from midnight to midnight.
        my.assert(day.length > 0);
        my.assert(my.isMidnight(_.first(day).begin));
        my.assert(my.isMidnight(_.last(day).end));

        // The events in the day must add up to a full day.
        var totalSeconds = _.reduce(day, function(memo, evnt) {
            my.assert(my.durationSeconds(evnt) >= 0);
            return memo + my.durationSeconds(evnt);
        }, 0);
        var targetSeconds = my.getSecondsInDate(_.first(day).begin);
        my.assert(totalSeconds == targetSeconds);
    });

    return {"categories": categories, "days": days};
};

// Main entry point to the application.
// Visualize the given events, replacing any previous visualization.
my.loadData = function(events) {
    var result = my.preprocessData(events);
    var categories = result.categories;
    var days = result.days;

    // Build each-day visualization.
    my.eachday = my.makeEachday(categories, days, $("#eachday"));

    // Build sunburst visualization.
    my.sunburstAll = my.makeSunburst(categories, days, $("#sunburst_all"));

    // After createSunburst runs, the nodes in partitionData are ordered by
    // size. We take advantage of this to display the categories in the
    // streamgraph in the same order.
    var orderedLeafCategories = _.map(
        my.getLeaves(my.sunburstAll.partitionData),
        function(leaf) { return leaf.category; });

    // Build streamgraph visualization.
    my.streamgraphAll = my.makeStreamgraph(
        categories, days, $("#streamgraph_all"), orderedLeafCategories);
};

// Set up event handlers for the load-data-modal.
my.setup = function() {
    $("#load-data").click(function() {
        $("#load-data-modal .error-message").text("");
        $("#load-data-modal .error").hide();
        $("#load-data-modal").modal("show");
    });

    $("#visualize").click(function() {
        try {
            var data = $.parseJSON($("#data-pastebin").val());
            my.loadData(data);
            $("#load-data-modal").modal("hide");
        } catch(err) {
            $("#load-data-modal .error-message").text(err);
            $("#load-data-modal .error").show();
            // Propagate exception to allow console debugging.
            throw err;
        }
    });
};

return my;
}(ticktockman || {}));
