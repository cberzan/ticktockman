from datetime import datetime
from datetime import time
from functools import partial
import csv
import dateutil.parser

# TODO:
# - regression test: time(0, 0) evaluates as False, causing parsing error


class RawLine(object):
    def __init__(self):
        self.begin_date = None
        self.begin_time = None
        self.end_date = None
        self.end_time = None
        self.category = None
        self.attributes = None
        self.comment = None

    def __str__(self):
        return (
            "begin_date={} begin_time={} end_date={} end_time={} "
            "category={} attributes={} comment={}".format(
                self.begin_date, self.begin_time, self.end_date, self.end_time,
                self.category, self.attributes, self.comment))


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

    CSV columns:

    - begin_date:
        If missing, assumed to be the previous event's end_date.
    - begin_time:
        If missing, assumed to be the previous event's end_time.
    - end_date:
        If missing, assumed to be the previous event's end_date.
        Consequence: end_date must be present when end_time crosses midnight.
    - end_time:
        Must be present.
    - category:
        Must be present.
    - comment:
        Optional.

    The `begin_time` and `end_time` columns accept two time formats: "12:34" or
    "1234". Note that in the latter format, "00:05" becomes just "5".

    Returns a list of Event objects. The events are in chronological order,
    cover a contiguous stretch of time, and do not overlap.
    """
    reader = csv.reader(csvfile)
    error = partial(ParseError, csvfile, reader)

    # Read header.
    header = reader.next()
    ref_header = [
        'begin_date', 'begin_time', 'end_date', 'end_time', 'category',
        'attributes', 'comment']
    if header != ref_header:
        raise error("Unexpected header line: expected {} but found {}".format(
            ref_header, header))

    # Read rows.
    events = []
    for lineno, fields in enumerate(reader, 3):
        row = fields_to_raw_line(fields, error)

        # end_time and category should always be specified.
        if row.end_time is None:
            raise error("Missing end_time")
        if not row.category:
            raise error("Missing category")

        # Infer end_date if it's missing.
        if row.end_date is None:
            if not events:
                raise error("Cannot infer end_date")
            row.end_date = events[-1].end.date()

        # Infer begin_date and begin_time if they're missing.
        if row.begin_date is None:
            if not events:
                raise error("Cannot infer begin_date")
            row.begin_date = events[-1].end.date()
        if row.begin_time is None:
            if not events:
                raise error("Cannot infer begin_time")
            row.begin_time = events[-1].end.time()

        # Assemble event.
        event = Event()
        event.begin = datetime.combine(row.begin_date, row.begin_time)
        event.end = datetime.combine(row.end_date, row.end_time)
        event.category = row.category
        event.comment = row.comment

        # Validate dates and times.
        if event.begin >= event.end:
            raise error("Event spans negative time: {}".format(event))
        if events:
            if event.begin != events[-1].end:
                raise error(
                    "Event {} does not occur directly after previous event {}"
                    .format(event, events[-1]))

        events.append(event)

    return events


def fields_to_raw_line(fields, error):
    """
    Parse a list of strings (`fields`) into a RawLine object.
    """

    def parse_date(date_str):
        if not date_str:
            return None
        try:
            return dateutil.parser.parse(date_str).date()
        except ValueError:
            raise error("Could not parse date '{}'".format(date_str))

    def parse_time(time_str):
        if not time_str:
            return None
        try:
            return _parse_time_str(time_str)
        except ValueError:
            raise error("Could not parse time '{}'".format(time_str))

    if len(fields) != 7:
        raise error("Expected {} fields, but found {}".format(7, len(fields)))

    line = RawLine()
    line.begin_date = parse_date(fields[0])
    line.begin_time = parse_time(fields[1])
    line.end_date = parse_date(fields[2])
    line.end_time = parse_time(fields[3])
    line.category = fields[4] or None
    line.attributes = fields[5] or None
    line.comment = fields[6] or None
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
