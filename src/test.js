"use strict";

/* global test */

var assert = require("assert");
var moment = require("moment");

var ticktock = require("./ticktock.js");
var app = require("./app.js");

function mkev(category, begin, end, comment) {
    return {
        "category": category,
        "begin": begin,
        "end": end,
        "comment": comment,
    };
}

function eventsEqual(evnt, refEvnt) {
    return (
        evnt.category === refEvnt.category &&
        evnt.begin.isSame(refEvnt.begin) &&
        evnt.end.isSame(refEvnt.end) &&
        evnt.comment === refEvnt.comment
    );
}

function eventListsEqual(events, refEvents) {
    if (events.length != refEvents.length) {
        return false;
    }
    for (var i = 0; i < events.length; i++) {
        if (!eventsEqual(events[i], refEvents[i])) {
            return false;
        }
    }
    return true;
}

test("splitEventAtMidnight", function() {
    var evnt, pieces, refPieces;

    // An event that does not need to be split.
    evnt = mkev(
        "reading", moment("2014-12-19 12:24"),
        moment("2014-12-19 14:50"), "A Tree Grows in Brooklyn"
    );
    pieces = ticktock.splitEventAtMidnight(evnt);
    refPieces = [evnt];
    assert(eventListsEqual(pieces, refPieces));

    // An event that needs to be split in two.
    evnt = mkev(
        "sleep", moment("2014-12-19 23:00"), moment("2014-12-20 08:00"));
    pieces = ticktock.splitEventAtMidnight(evnt);
    refPieces = [
        mkev("sleep", moment("2014-12-19 23:00"), moment("2014-12-20 00:00")),
        mkev("sleep", moment("2014-12-20 00:00"), moment("2014-12-20 08:00")),
    ];
    assert(eventListsEqual(pieces, refPieces));

    // An event that needs to be split in four.
    evnt = mkev(
        "untracked", moment("2014-12-19 23:00"), moment("2014-12-22 08:00"));
    pieces = ticktock.splitEventAtMidnight(evnt);
    refPieces = [
        mkev("untracked", moment("2014-12-19 23:00"), moment("2014-12-20 00:00")),
        mkev("untracked", moment("2014-12-20 00:00"), moment("2014-12-21 00:00")),
        mkev("untracked", moment("2014-12-21 00:00"), moment("2014-12-22 00:00")),
        mkev("untracked", moment("2014-12-22 00:00"), moment("2014-12-22 08:00")),
    ];
    assert(eventListsEqual(pieces, refPieces));
});

test("groupEventsIntoDays", function() {
    var events = [
        mkev("0", moment("2014-12-19 14:00"), moment("2014-12-19 22:00")),
        mkev("1", moment("2014-12-19 22:00"), moment("2014-12-20 00:00")),
        mkev("2", moment("2014-12-20 00:00"), moment("2014-12-20 08:15")),
        mkev("3", moment("2014-12-20 08:15"), moment("2014-12-20 23:02")),
        mkev("4", moment("2014-12-20 23:02"), moment("2014-12-21 00:00")),
        mkev("5", moment("2014-12-21 00:00"), moment("2014-12-21 07:30")),
    ];
    var days = ticktock.groupEventsIntoDays(events);
    var refDays = [
        [events[0], events[1]],
        [events[2], events[3], events[4]],
        [events[5]],
    ];
    assert(days.length == refDays.length);
    for (var i = 0; i < days.length; i++) {
        assert(eventListsEqual(days[i], refDays[i]));
    }
});

test("regression: missing untracked category", function() {
    var events = [
        {
            "category": [ "sleep" ],
            "begin": "2014-11-03T00:00:00",
            "end": "2014-11-03T08:00:00"
        },
        {
            "category": [ "overhead", "reading_online" ],
            "begin": "2014-11-03T08:00:00",
            "end": "2014-11-03T08:15:00"
        }
    ];
    // preprocessData must add an "untracked" category, even if there are no
    // events with that category. This is needed for padding days to 24h.
    var result = app.preprocessData(events);
    assert(result.categories.root.children.untracked.name == "untracked");
});

test("regression: break on events with non-zero seconds", function() {
    assert(ticktock.isMidnight(moment("2014-11-03 00:00:00")));
    assert(!ticktock.isMidnight(moment("2014-11-03 00:00:12")));

    var events = [
        {
            "category": [ "one" ],
            "begin": "2014-11-03T00:00:12",
            "end": "2014-11-03T08:00:34"
        },
        {
            "category": [ "two" ],
            "begin": "2014-11-03T08:00:34",
            "end": "2014-11-04T08:15:56"
        }
    ];
    var result = app.preprocessData(events);
    var days = result.days;
    assert(days.length == 2);

    assert(days[0].length == 3);
    assert(days[0][0].begin.isSame(moment("2014-11-03 00:00:00")));
    assert(days[0][0].end.isSame(moment("2014-11-03 00:00:12")));
    assert(days[0][1].begin.isSame(moment("2014-11-03 00:00:12")));
    assert(days[0][1].end.isSame(moment("2014-11-03 08:00:34")));
    assert(days[0][2].begin.isSame(moment("2014-11-03 08:00:34")));
    assert(days[0][2].end.isSame(moment("2014-11-04 00:00:00")));

    assert(days[1].length == 2);
    assert(days[1][0].begin.isSame(moment("2014-11-04 00:00:00")));
    assert(days[1][0].end.isSame(moment("2014-11-04 08:15:56")));
    assert(days[1][1].begin.isSame(moment("2014-11-04 08:15:56")));
    assert(days[1][1].end.isSame(moment("2014-11-05 00:00:00")));
});
