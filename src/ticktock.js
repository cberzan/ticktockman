"use strict";

var assert = require("assert");
var _ = require("underscore");

// Take a number of seconds and return a compact humanized string, like "3d5h",
// "5h3m", "3m5s", or "4s".
exports.humanizeSeconds = function(seconds) {
    if (seconds > 86400) {
        return Math.floor(seconds / 86400) + "d" +
            Math.floor((seconds % 86400) / 3600) + "h";
    } else if (seconds > 3600) {
        return Math.floor(seconds / 3600) + "h" +
            Math.floor((seconds % 3600) / 60) + "m";
    } else if (seconds > 60) {
        return Math.floor(seconds / 60) + "m" +
            Math.floor(seconds % 60) + "s";
    } else {
        return Math.floor(seconds) + "s";
    }
};

// Take a percentage, and return a humanized string like "86.3%" or "< 0.1%".
exports.humanizePercent = function(percent) {
    if (percent < 0.1) {
        return "< 0.1%";
    } else {
        return percent.toPrecision(3) + "%";
    }
};

// Return a deep-copy of the given tree. Only copies the "name" and "children"
// properties.
exports.cloneTree = function(root) {
    var copy = {};
    copy.name = root.name;
    if (_.has(root, "children")) {
        copy.children = _.map(root.children, exports.cloneTree);
    }
    return copy;
};

// Return an array containing the leaf nodes in the given tree.
exports.getLeaves = function(root) {
    if(_.has(root, "children")) {
        return _.flatten(_.map(root.children, exports.getLeaves));
    } else {
        return [root];
    }
};

// Return an array of root-to-leaf paths in the given tree.
// All paths are arrays of nodes, from the root to a leaf.
exports.getRootToLeafPaths = function(root) {
    if(_.has(root, "children")) {
        var paths = [];
        _.each(root.children, function(child) {
            var childPaths = exports.getRootToLeafPaths(child);
            _.each(childPaths, function(path) {
                path.unshift(root);
                paths.push(path);
            });
        });
        return paths;
    } else {
        return [[root]];
    }
};

// Traverse the given tree recursively, and call func(node, childResults) on
// every node, where childResults is an array with the results of applying func
// to the node's children. The nodes must have a "children" property, which is
// either an array of nodes, or an object with nodes as values.
exports.traverseTree = function(root, func) {
    var childResults = _.map(root.children, function(node) {
        return exports.traverseTree(node, func);
    });
    return func(root, childResults);
};
// TODO: unit test this and get rid of the other tree funcs.

// Return true iff the given moment falls at midnight.
exports.isMidnight = function(moment) {
    return (
        moment.hour() === 0 &&
        moment.minute() === 0 &&
        moment.second() === 0 &&
        moment.millisecond() === 0
    );
};

// Return duration of the given event, in seconds.
exports.durationSeconds = function(evnt) {
    return evnt.end.diff(evnt.begin, 'seconds');
};

// Split the given event where it crosses midnight, and return an array of
// events that do not cross midnight.
exports.splitEventAtMidnight = function(evnt) {
    var pieces = [];
    var begin = evnt.begin;
    var midnight = begin.clone().hour(0).minute(0).second(0).add(1, 'day');
    while (midnight.isBefore(evnt.end)) {
        var piece = {
            "category": evnt.category,
            "begin": begin.clone(),
            "end": midnight.clone(),
            "comment": evnt.comment,
        };
        pieces.push(piece);
        begin = piece.end;
        midnight.add(1, 'day');
    }
    var lastPiece = {
        "category": evnt.category,
        "begin": begin.clone(),
        "end": evnt.end.clone(),
        "comment": evnt.comment,
    };
    pieces.push(lastPiece);
    return pieces;
};

// Group events into days.
// Returns an array of days, where each day is an array of events.
// Assumes the events are already split at midnight, and cover a contiguous
// stretch of time.
exports.groupEventsIntoDays = function(events) {
    var days = [];
    var currentDay = [];
    _.each(events, function(evnt) {
        // If event starts at midnight, start a new day.
        if (exports.isMidnight(evnt.begin)) {
            // Finish current day.
            if (currentDay.length > 0) {
                days.push(currentDay);
            }
            currentDay = [];
        }
        currentDay.push(evnt);
    });
    if (currentDay.length > 0) {
        days.push(currentDay);
    }
    return days;
};

exports.secondsInADay = 86400.0;

// DST logic: Return number of seconds in the date starting at the given
// moment, which must be at midnight.
exports.getSecondsInDate = function(dayBegin) {
    assert(exports.isMidnight(dayBegin));
    var dayEnd = dayBegin.clone().add(1, 'day');
    var targetSeconds = exports.secondsInADay;
    if (dayBegin.isDST() && !dayEnd.isDST()) {
        targetSeconds += 60 * 60;
    } else if (!dayBegin.isDST() && dayEnd.isDST()) {
        targetSeconds -= 60 * 60;
    }
    return targetSeconds;
};

// DST logic: Return number of seconds in the week starting at the given
// moment, which must be at midnight.
exports.getSecondsInWeek = function(weekBegin) {
    assert(exports.isMidnight(weekBegin));
    var weekEnd = weekBegin.clone().add(7, 'day');
    var targetSeconds = exports.secondsInADay * 7;
    if (weekBegin.isDST() && !weekEnd.isDST()) {
        targetSeconds += 60 * 60;
    } else if (!weekBegin.isDST() && weekEnd.isDST()) {
        targetSeconds -= 60 * 60;
    }
    return targetSeconds;
};

// TODO: unit tests for DST logic
