#!/usr/bin/env python

from datetime import timedelta
import argparse

from events import convert_to_old_format
from events import parse_events
from tree import add_events
from tree import finalize_tree
from tree import parse_ontology
from tree import print_tree


if __name__ == "__main__":
    # Parse command-line args.
    parser = argparse.ArgumentParser(description="Process time-tracking data.")
    parser.add_argument('ontology', help="path to ontology file")
    parser.add_argument('segment', nargs='+', help="path to segment file")
    args = parser.parse_args()
    print args

    # Read the ontology and build an empty tree.
    tree = parse_ontology(open(args.ontology))
    # print_tree(tree, 0, None, None)

    # Read segments and add them to the tree.
    segments = []
    for segment_path in args.segment:
        events = parse_events(open(segment_path))
        events = map(convert_to_old_format, events)
        segments.append(events)
    total_time = timedelta()
    print "Have {} segments:".format(len(segments))
    for events in segments:
        segment_time = events[-1][1] - events[0][0]
        print "    from {} to {} (time tracked: {})".format(
            events[0][0], events[-1][1], segment_time)
        total_time += segment_time
    print "Total time tracked: {}".format(total_time)
    for events in segments:
        add_events(tree, events)
    finalize_tree(tree)

    # Print the tree.
    print "Time by category:"
    print_tree(tree, 0, total_time, total_time)
