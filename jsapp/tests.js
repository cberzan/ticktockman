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
    var evnt = {
        "category": "reading",
        "begin": moment("2014-12-19 12:24"),
        "end": moment("2014-12-19 14:50"),
        "comment": "A Tree Grows in Brooklyn",
    };
    var pieces = splitEventAtMidnight(evnt);
    var refPieces = [evnt];
    assert.ok(eventListsEqual(pieces, refPieces));

    // An event that needs to be split in two.
    var evnt = {
        "category": "sleep",
        "begin": moment("2014-12-19 23:00"),
        "end": moment("2014-12-20 08:00"),
    };
    var pieces = splitEventAtMidnight(evnt);
    var refPieces = [{
        "category": "sleep",
        "begin": moment("2014-12-19 23:00"),
        "end": moment("2014-12-20 00:00"),
    }, {
        "category": "sleep",
        "begin": moment("2014-12-20 00:00"),
        "end": moment("2014-12-20 08:00"),
    }];
    assert.ok(eventListsEqual(pieces, refPieces));

    // An event that needs to be split in four.
    var evnt = {
        "category": "untracked",
        "begin": moment("2014-12-19 23:00"),
        "end": moment("2014-12-22 08:00"),
    };
    var pieces = splitEventAtMidnight(evnt);
    var refPieces = [{
        "category": "untracked",
        "begin": moment("2014-12-19 23:00"),
        "end": moment("2014-12-20 00:00"),
    }, {
        "category": "untracked",
        "begin": moment("2014-12-20 00:00"),
        "end": moment("2014-12-21 00:00"),
    }, {
        "category": "untracked",
        "begin": moment("2014-12-21 00:00"),
        "end": moment("2014-12-22 00:00"),
    }, {
        "category": "untracked",
        "begin": moment("2014-12-22 00:00"),
        "end": moment("2014-12-22 08:00"),
    }];
    assert.ok(eventListsEqual(pieces, refPieces));
});
