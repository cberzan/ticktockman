#!/usr/bin/env python

# Convert CSV dataset to JSON dataset.
# Usage: ./csv2json.py ontology.txt events.csv

# Note: The Python code is from an older incarnation of the project, and most
# of it is not relevant for the D3 visualizer. It will be cleaned up in the
# future.

from collections import defaultdict
from datetime import timedelta
import argparse
import itertools
import json

from events import parse_events
from ontology import parse_ontology
from time_tree import build_time_tree
from time_tree import print_time_tree


if __name__ == "__main__":
    # Parse command-line args.
    parser = argparse.ArgumentParser(description="Process time-tracking data.")
    parser.add_argument('ontology', help="path to ontology file")
    parser.add_argument('events_path', help="path to events file")
    args = parser.parse_args()

    # Read events and print summary.
    events = parse_events(open(args.events_path))
    print "Events span from {} to {}".format(events[0].begin, events[-1].end)
    print "Total time tracked: {}".format(events[-1].end - events[0].begin)

    # Group events by category.
    categ_to_time = defaultdict(timedelta)
    for event in events:
        categ_to_time[event.category] += event.duration()

    # Read the ontology and check for missing categories.
    onto_tree = parse_ontology(open(args.ontology))
    leaf_categs = [leaf.label for leaf in onto_tree.leaves()]
    missing_categs = set(categ_to_time.iterkeys()) - set(leaf_categs)
    if missing_categs:
        print ("The following leaf categories are missing "
               "from the ontology: {}".format(list(missing_categs)))

    # Compute the time spent in each node of the tree.
    time_tree = build_time_tree(onto_tree, categ_to_time)

    # Print the tree.
    # NOTE: The average time per day is no longer accurate, since we include
    # the untracked time in the denominator.
    print "Time by category:"
    print_time_tree(time_tree)

    # Write out JSON in a format suitable for D3.
    # We have to output full category paths, e.g. ['work', 'research',
    # 'reading_papers'] instead of just the leaf category 'reading_papers'.
    def func(node, child_results):
        paths = list(itertools.chain(*child_results))
        if node.label == 'root':
            # Omit 'root' as the first element.
            return paths
        elif not child_results:
            # Base case.
            return [[node.label]]
        else:
            new_paths = []
            for path in paths:
                new_paths.append([node.label] + path)
            return new_paths
    leaf_categ_to_categ_path = {}
    for path in onto_tree.transform(func):
        assert path[-1] not in leaf_categ_to_categ_path
        leaf_categ_to_categ_path[path[-1]] = path

    def event_to_dict(event):
        data = {
            'begin': event.begin.isoformat(),
            'end': event.end.isoformat(),
            'category': leaf_categ_to_categ_path[event.category],
        }
        if event.comment:
            data['comment'] = event.comment
        return data

    event_dicts = [event_to_dict(event) for event in events]
    with open("out.json", "w") as f:
        json.dump(event_dicts, f, indent=4)
