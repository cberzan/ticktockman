#!/usr/bin/env python

# Expand categories in a CSV dataset.
#
# Usage: ./expand_categories.py in.csv categories.yaml out.csv
#
# TODO docs


import argparse

from categories import make_categ_to_path
from categories import read_categories_yaml
from events import read_events_csv
from events import write_events_csv


if __name__ == "__main__":
    # Parse command-line args.
    parser = argparse.ArgumentParser(
        description="Expand categories in CSV time-tracking data.")
    parser.add_argument('in_csv', help="path to input CSV file")
    parser.add_argument('categories_yaml', help="path to categories YAML file")
    parser.add_argument('out_csv', help="path to output CSV file")
    args = parser.parse_args()

    # Read events and print summary.
    print "Reading events from {}...".format(args.in_csv)
    with open(args.in_csv) as f:
        events = read_events_csv(f)
    print " -> Read {} events spanning from {} to {}".format(
        len(events), events[0].begin, events[-1].end)

    # Read categories.
    print "Reading category tree from {}...".format(args.categories_yaml)
    with open(args.categories_yaml) as f:
        categs_root = read_categories_yaml(f)
        categ_to_path = make_categ_to_path(categs_root)
    print " -> Have {} categories".format(len(categ_to_path))

    # Report unknown categories.
    used_categs = set(event.category for event in events)
    known_categs = set(categ_to_path.iterkeys())
    unknown_categories = used_categs - known_categs
    if unknown_categories:
        raise ValueError("Found unknown categories: {}".format(
            sorted(list(unknown_categories))))

    # Note: We could also report unused categories, but that's more
    # complicated, since an event in '/food/dinner' would have to mark
    # both '/food/dinner' and '/food' as used categories.

    # Expand the category of each event.
    for event in events:
        event.category = categ_to_path[event.category]

    # Write events with expanded categories.
    print "Writing events to {}...".format(args.out_csv)
    with open(args.out_csv, 'w') as f:
        write_events_csv(events, f)
    print " -> Done."
