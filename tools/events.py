from datetime import datetime
from datetime import time
from datetime import timedelta
from functools import partial
import csv
import dateutil.parser

# TODO:
# - regression test: time(0, 0) evaluates as False, causing parsing error


class RawLine(object):
    def __init__(self):
        self.date = None
        self.end_time = None
        self.category = None
        self.attributes = None
        self.comment = None

    def __str__(self):
        return (
            "date={} end_time={} category={} attributes={} comment={}"
            .format(self.date, self.end_time, self.category,
                    self.attributes, self.comment))


class Event(object):
    def __init__(self):
        self.begin = None
        self.end = None
        self.category = None
        self.comment = None

    def duration(self):
        return self.end - self.begin


class ParseError(Exception):
    def __init__(self, csvfile, reader, message):
        super(ParseError, self).__init__(
            "{}:{}: {}".format(csvfile.name, reader.line_num, message))


def parse_events(csvfile):
    """
    Read list of events from the given CSV file.

    CSV columns: date,end_time,category,comment

    The `date` is expected to appear only when the time crosses midnight. The
    `comment` column is optional. The logical `begin_time` of an event is the
    `end_time` of the event above it.

    Returns a list of Event objects. The events are in chronological order,
    cover a contiguous stretch of time, and do not overlap.
    """
    reader = csv.reader(csvfile)
    error = partial(ParseError, csvfile, reader)

    # Read header.
    header = reader.next()
    ref_header = ['date', 'end_time', 'category', 'attributes', 'comment']
    if header != ref_header:
        raise error("Unexpected header line: expected {} but found {}".format(
            ref_header, header))

    # Read first row.
    prev_row = fields_to_raw_line(reader.next(), error)
    if not prev_row.date:
        raise error("First row must specify date")
    if prev_row.end_time is None:
        raise error("first row must specify end_time")
    prev_event_end = datetime.combine(prev_row.date, prev_row.end_time)

    # Read subsequent rows.
    events = []
    one_day = timedelta(days=1)
    for lineno, fields in enumerate(reader, 3):
        row = fields_to_raw_line(fields, error)

        # Date should appear iff time crosses midnight.
        # If date doesn't appear, fill it in from the prev_row.
        if row.date:
            if row.date != prev_row.date + one_day:
                raise error("Expected the day after, but got a different date")
            if row.end_time >= prev_row.end_time:
                raise error("Got date but did not expect one")
        else:
            if row.end_time <= prev_row.end_time:
                raise error("Expected date, but did not get one")
            row.date = prev_row.date

        # End time and category should always appear.
        if row.end_time is None:
            raise error("Expected end_time")
        if not row.category:
            raise error("Expected category")

        # Assemble event.
        event = Event()
        event.begin = prev_event_end
        event.end = datetime.combine(row.date, row.end_time)
        event.category = row.category
        event.comment = row.comment

        events.append(event)
        prev_row = row
        prev_event_end = event.end

    return events


def fields_to_raw_line(fields, error):
    """
    Parse a list of strings (`fields`) into a RawLine object.
    """
    line = RawLine()

    if len(fields) != 5:
        raise error("Expected {} fields, but found {}".format(6, len(fields)))

    if fields[0]:
        try:
            line.date = dateutil.parser.parse(fields[0]).date()
        except ValueError:
            raise error("Could not parse date")

    if fields[1]:
        try:
            line.end_time = _parse_time_str(fields[1])
        except ValueError:
            raise error("Could not parse time '{}'".format(fields[1]))

    if fields[2]:
        line.category = fields[2]

    if fields[3]:
        line.attributes = [attr.strip() for attr in fields[3].split(',')]

    if fields[4]:
        line.comment = fields[4]

    return line


def _parse_time_str(time_str):
    """
    Parse a time string with minute resolution, and return a time object.

    Raises ValueError on parse errors.

    >>> _parse_time_str('12:34')
    datetime.time(12, 34)
    >>> _parse_time_str('1604')
    datetime.time(16, 4)
    >>> _parse_time_str('3')
    datetime.time(0, 3)
    """
    if ':' in time_str:
        # Parse a time encoded as "12:34".
        return dateutil.parser.parse(time_str).time()
    else:
        # Parse a time encoded as "1234".
        time_int = int(time_str)
        hours = time_int / 100
        minutes = time_int % 100
        return time(hours, minutes)
