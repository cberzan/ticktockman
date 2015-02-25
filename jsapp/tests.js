var my = ticktockman;

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

QUnit.test("splitEventAtMidnight", function(assert) {
    // An event that does not need to be split.
    var evnt = mkev(
        "reading", moment("2014-12-19 12:24"),
        moment("2014-12-19 14:50"), "A Tree Grows in Brooklyn"
    );
    var pieces = my.splitEventAtMidnight(evnt);
    var refPieces = [evnt];
    assert.ok(eventListsEqual(pieces, refPieces));

    // An event that needs to be split in two.
    var evnt = mkev(
        "sleep", moment("2014-12-19 23:00"), moment("2014-12-20 08:00"));
    var pieces = my.splitEventAtMidnight(evnt);
    var refPieces = [
        mkev("sleep", moment("2014-12-19 23:00"), moment("2014-12-20 00:00")),
        mkev("sleep", moment("2014-12-20 00:00"), moment("2014-12-20 08:00")),
    ];
    assert.ok(eventListsEqual(pieces, refPieces));

    // An event that needs to be split in four.
    var evnt = mkev(
        "untracked", moment("2014-12-19 23:00"), moment("2014-12-22 08:00"));
    var pieces = my.splitEventAtMidnight(evnt);
    var refPieces = [
        mkev("untracked", moment("2014-12-19 23:00"), moment("2014-12-20 00:00")),
        mkev("untracked", moment("2014-12-20 00:00"), moment("2014-12-21 00:00")),
        mkev("untracked", moment("2014-12-21 00:00"), moment("2014-12-22 00:00")),
        mkev("untracked", moment("2014-12-22 00:00"), moment("2014-12-22 08:00")),
    ];
    assert.ok(eventListsEqual(pieces, refPieces));
});

QUnit.test("groupEventsIntoDays", function(assert) {
    var events = [
        mkev("0", moment("2014-12-19 14:00"), moment("2014-12-19 22:00")),
        mkev("1", moment("2014-12-19 22:00"), moment("2014-12-20 00:00")),
        mkev("2", moment("2014-12-20 00:00"), moment("2014-12-20 08:15")),
        mkev("3", moment("2014-12-20 08:15"), moment("2014-12-20 23:02")),
        mkev("4", moment("2014-12-20 23:02"), moment("2014-12-21 00:00")),
        mkev("5", moment("2014-12-21 00:00"), moment("2014-12-21 07:30")),
    ];
    var days = my.groupEventsIntoDays(events);
    var refDays = [
        [events[0], events[1]],
        [events[2], events[3], events[4]],
        [events[5]],
    ];
    assert.equal(days.length, refDays.length);
    for (var i = 0; i < days.length; i++) {
        assert.ok(eventListsEqual(days[i], refDays[i]));
    }
});

QUnit.test("regression: missing untracked category", function(assert) {
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
    var result = my.preprocessData(events);
    assert.equal(
        result.categories.root.children["untracked"].name,
        "untracked");
});
