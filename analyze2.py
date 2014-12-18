#!/usr/bin/env python

from analyze import add_events
from analyze import parse_ontology
from analyze import print_tree

import csv
import datetime
import dateutil.parser


class RawLine(object):
    def __init__(self):
        self.date = None
        self.date_comment = None
        self.end_time = None
        self.category = None
        self.comment = None


class Event(object):
    def __init__(self):
        self.begin = None
        self.end = None
        self.category = None
        self.comment = None


def parse_events(csvfile):
    """
    Read list of events from the given CSV file.

    CSV columns: date,date_comment,end_time,category,comment

    The `date` is expected to appear only when the time crosses midnight. The
    `date_comment` is ignored. The `comment` column is optional. The logical
    `begin_time` of an event is the `end_time` of the event above it.

    Returns a list of Event objects. The events are in chronological order,
    cover a contiguous stretch of time, and do not overlap.
    """
    reader = csv.reader(csvfile)

    # Read header.
    header = reader.next()
    ref_header = ['date', 'date_comment', 'end_time', 'category', 'comment']
    if header != ref_header:
        raise ValueError("unexpected header line")

    # Read first row.
    prev_row = parse_csv_line(2, reader.next())
    if not prev_row.date:
        raise ValueError("first row must specify date")
    if not prev_row.end_time:
        raise ValueError("first row must specify end_time")
    prev_event_end = datetime.datetime.combine(
        prev_row.date, prev_row.end_time)

    # Read subsequent rows.
    events = []
    one_day = datetime.timedelta(days=1)
    for lineno, fields in enumerate(reader, 3):
        row = parse_csv_line(lineno, fields)

        # Date should appear iff time crosses midnight.
        # If date doesn't appear, fill it in from the prev_row.
        if row.date:
            if row.date != prev_row.date + one_day:
                raise ValueError(
                    "line {}: expected the day after, but got a different date"
                    .format(lineno))
            if row.end_time >= prev_row.end_time:
                raise ValueError(
                    "line {}: got date but did not expect one"
                    .format(lineno))
        else:
            if row.end_time <= prev_row.end_time:
                raise ValueError(
                    "line {}: expected date, but did not get one"
                    .format(lineno))
            row.date = prev_row.date

        # End time and category should always appear.
        if not row.end_time:
            raise ValueError("line {}: expected end_time".format(lineno))
        if not row.category:
            raise ValueError("line {}: expected category".format(lineno))

        # Assemble event.
        event = Event()
        event.begin = prev_event_end
        event.end = datetime.datetime.combine(row.date, row.end_time)
        event.category = row.category
        event.comment = row.comment

        events.append(event)
        prev_row = row
        prev_event_end = event.end

    return events


def parse_csv_line(lineno, fields):
    """
    Parse a CSV line (`fields` is a list of string) into a RawLine object.
    """
    # print "parsing line {}: {}".format(lineno, fields)

    line = RawLine()

    if len(fields) != 5:
        raise ValueError("line {}: expected {} fields, but found {}".format(
            lineno, 5, len(fields)))

    if fields[0]:
        try:
            line.date = dateutil.parser.parse(fields[0]).date()
        except ValueError:
            raise ValueError("line {}: could not parse date".format(lineno))

    if fields[1]:
        line.date_comment = fields[1]

    if fields[2]:
        try:
            line.end_time = dateutil.parser.parse(fields[2]).time()
        except ValueError:
            raise ValueError("line {}: could not parse time".format(lineno))

    if fields[3]:
        line.category = fields[3]

    if fields[4]:
        line.comment = fields[4]

    return line


def convert_to_old_format(event):
    """
    Convert Event object to (begin, end, [category], comment) tuple.
    """
    return (event.begin, event.end, [event.category], event.comment)


if __name__ == "__main__":
    tree = parse_ontology(open("ontology.txt"))
    # print_tree(tree, 0, None, None)

    events = parse_events(open("current.csv"))
    events = map(convert_to_old_format, events)
    total_time = events[-1][1] - events[0][0]
    print "Total time tracked: {}".format(total_time)

    add_events(tree, events)
    print "Time by category:"
    print_tree(tree, 0, total_time, total_time)
