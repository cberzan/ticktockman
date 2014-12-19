function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        throw new Error(message);
    }
}

// Take a number of seconds and return a compact humanized string, like "3d5h",
// "5h3m", "3m5s", or "4s".
function humanizeSeconds(seconds) {
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
}

// Take a percentage, and return a humanized string like "86.3%" or "< 0.1%".
function humanizePercent(percent) {
  if (percent < 0.1) {
    return "< 0.1%";
  } else {
    return percent.toPrecision(3) + "%";
  }
}

// Return a deep-copy of the given tree. Only copies the "name" and "children"
// properties.
function cloneTree(root) {
    var copy = {};
    copy.name = root.name;
    if (_.has(root, "children")) {
        copy.children = _.map(root.children, cloneTree);
    }
    return copy;
}

// Return an array containing the leaf nodes in the given tree.
function getLeaves(root) {
    if(_.has(root, "children")) {
        return _.flatten(_.map(root.children, getLeaves));
    } else {
        return [root];
    }
}

// Return an array of root-to-leaf paths in the given tree.
// All paths are arrays of nodes, from the root to a leaf.
function getRootToLeafPaths(root) {
    if(_.has(root, "children")) {
        var paths = [];
        _.each(root.children, function(child) {
            var childPaths = getRootToLeafPaths(child);
            _.each(childPaths, function(path) {
                path.unshift(root);
                paths.push(path);
            });
        });
        return paths;
    } else {
        return [[root]];
    }
}

// Return true iff the given moment falls at midnight.
function isMidnight(moment) {
    return (moment.hour() == 0 && moment.minute() == 0);
}

// Return duration of the given event, in seconds.
function durationSeconds(evnt) {
    return evnt.end.diff(evnt.begin, 'seconds');
}

// Split the given event where it crosses midnight, and return an array of
// events that do not cross midnight.
function splitEventAtMidnight(evnt) {
    var pieces = [];
    var begin = evnt.begin;
    var midnight = begin.clone().hour(0).minute(0).add(1, 'day');
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
}

// Group events into days.
// Returns an array of days, where each day is an array of events.
// Assumes the events are already split at midnight, and cover a contiguous
// stretch of time.
function groupEventsIntoDays(events) {
    var days = [];
    var currentDay = [];
    _.each(events, function(evnt) {
        // If event starts at midnight, start a new day.
        if (isMidnight(evnt.begin)) {
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
}

// Add each event's duration in seconds, multiplied by coef, to the event's
// category in categToSeconds. Assumes categToSeconds has a property for every
// category.
function tallyEvents(events, coef, categToSeconds) {
    _.each(events, function(evnt) {
        assert(_.has(categToSeconds, evnt.category));
        assert(durationSeconds(evnt) >= 0);
        categToSeconds[evnt.category] += durationSeconds(evnt) * coef;
    });
}
