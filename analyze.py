#!/usr/bin/env python

from collections import Counter
from collections import defaultdict
from datetime import datetime
from datetime import timedelta


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


def parse_events(inp):
    """
    Return list of events, where an event is (begin, end, [category], comment).
    """
    today = None
    events = []
    lineno = 0
    for line in inp:
        line = line.strip()
        lineno += 1
        if not line or line.startswith('#'):
            continue

        if line.startswith('date'):
            # Parse a date line like:
            # date 2013-10-19 (Sat)
            date = datetime.strptime(line.split()[1], "%Y-%m-%d").date()
            if today is None:
                today = date
            elif today != date:
                raise ValueError("line {}: date doesn't match".format(lineno))
            continue

        # Parse an event line like:
        # 18:30 - 21:00   online_reading, planning                bla bla
        parts = line.split()
        begin = datetime.strptime(parts[0], "%H:%M")
        begin = begin.replace(today.year, today.month, today.day)
        if events and begin < events[-1][0]:
            today += timedelta(days=1)
            begin += timedelta(days=1)
        if events and begin != events[-1][1]:
            raise ValueError("line {}: time gap".format(lineno))
        end = datetime.strptime(parts[2], "%H:%M")
        end = end.replace(today.year, today.month, today.day)
        if end < begin:
            today += timedelta(days=1)
            end += timedelta(days=1)
        categs = []
        for pos, part in enumerate(parts[3:], 3):
            comma = part.endswith(',')
            if comma:
                part = part[:-1]
            categs.append(part)
            if not comma:
                break
        comment = ' '.join(parts[pos+1:])
        event = (begin, end, categs, comment)
        # print (begin.isoformat(), end.isoformat(), categs, comment)  # DEBUG
        events.append(event)

    return events


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
    tree = parse_ontology(open("old-ontology"))
    # print_tree(tree, 0, None, None)

    events = parse_events(open("old-data"))
    total_time = events[-1][1] - events[0][0]
    print "Total time tracked: {}".format(total_time)

    add_events(tree, events)
    print "Time by category:"
    print_tree(tree, 0, total_time, total_time)
