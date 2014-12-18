#!/usr/bin/env python

from datetime import timedelta
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
    one_day = timedelta(days=1)
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


class Node:
    def __init__(self):
        self.category = None
        self.time_spent = timedelta()
        self.children = []


def parse_ontology(inp):
    """
    Return tree of categories.

    Nodes in this tree are {category -> sub_categories} dicts.
    Leaf categories are empty dicts like {"leaf_cat" -> {}}.
    """
    root = Node()
    root.category = 'root'
    # We add an empty first line so that lineno can start at 1, and therefore
    # match the actual line number in the file, which is 1-indexed.
    lines = [''] + inp.readlines()
    lineno = parse_ontology_level(lines, 1, 0, root)
    if lineno != len(lines):
        raise ValueError("line {}: underindented".format(lineno))
    return root


def parse_ontology_level(lines, lineno, root_spaces, root):
    """
    Parse a level of the tree into `root` and return the next `lineno`.

    The level is defined by the number of spaces.
    """
    prev_categ = None
    child_spaces = None
    while True:
        if lineno == len(lines):
            # EOF; end recursion.
            break
        line = lines[lineno]
        if not line.strip() or line.startswith('#'):
            # Ignore blank line.
            lineno += 1
            continue
        categ = line.strip()
        spaces = 0
        for c in line:
            if c != ' ':
                break
            spaces += 1
        if spaces < root_spaces:
            # Handled by function above us.
            break
        if spaces == root_spaces:
            # Handled by ourselves.
            child = Node()
            child.category = categ
            root.children.append(child)
            prev_categ = child
            lineno += 1
        elif spaces > root_spaces:
            # Handled by a child function.
            if child_spaces is None:
                child_spaces = spaces
            if child_spaces != spaces:
                raise ValueError("line {}: indent mismatch".format(lineno))
            if prev_categ is None:
                raise ValueError("line {}: overindented".format(lineno))
            lineno = parse_ontology_level(lines, lineno, spaces, prev_categ)

    return lineno


def add_events(tree, events):
    """
    Assign events to leaf categories, and propagate time_spent upwards.

    In place.
    """
    def find_leaf_categs(node):
        if not node.children:
            if node.category in leaf_categ_to_node:
                raise ValueError(
                    "duplicate leaf category '{}'".format(node.category))
            leaf_categ_to_node[node.category] = node
        for child in node.children:
            find_leaf_categs(child)

    def sum_time_spent(node):
        for child in node.children:
            sum_time_spent(child)
            node.time_spent += child.time_spent
        node.children.sort(key=lambda child: -child.time_spent)

    leaf_categ_to_node = {}
    find_leaf_categs(tree)

    for (begin, end, categs, comment) in events:
        time = (end - begin) / len(categs)
        for categ in categs:
            if categ not in leaf_categ_to_node:
                raise ValueError("unknown leaf category '{}'".format(categ))
            node = leaf_categ_to_node[categ]
            node.time_spent += time

    sum_time_spent(tree)


def print_tree(node, spaces, parent_time, total_time):
    """
    Pretty-print tree of categories.
    """
    time_sec = node.time_spent.total_seconds()
    percent_of_parent = 0.0
    time_per_day = '-'
    if parent_time:
        percent_of_parent = 100.0 * time_sec / parent_time.total_seconds()
    if total_time:
        frac_of_total = 1.0 * time_sec / total_time.total_seconds()
        sec_per_day = timedelta(days=1).total_seconds() * frac_of_total
        time_per_day = timedelta(seconds=int(sec_per_day))
    print "{}{:30s}  {:5.2f}% of parent;  total {};  per-day {}".format(
        ' ' * spaces,
        node.category,
        percent_of_parent,
        node.time_spent,
        time_per_day)
    for child in node.children:
        print_tree(child, spaces + 4, node.time_spent, total_time)

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
