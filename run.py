#!/usr/bin/env python

from collections import defaultdict
from datetime import timedelta
import argparse
import itertools
import json

from events import Event
from events import parse_events
from ontology import parse_ontology
from time_tree import build_time_tree
from time_tree import print_time_tree


if __name__ == "__main__":
    # Parse command-line args.
    parser = argparse.ArgumentParser(description="Process time-tracking data.")
    parser.add_argument('ontology', help="path to ontology file")
    parser.add_argument('segment', nargs='+', help="path to segment file")
    args = parser.parse_args()

    # Read event segments.
    segments = []
    for segment_path in args.segment:
        events = parse_events(open(segment_path))
        segments.append(events)
    total_time = timedelta()

    # Print a summary of time tracked.
    print "Have {} segments:".format(len(segments))
    for events in segments:
        segment_time = events[-1].end - events[0].begin
        print "    from {} to {} (time tracked: {})".format(
            events[0].begin, events[-1].end, segment_time)
        total_time += segment_time
    print "Total time tracked: {}".format(total_time)
    print

    # Group events by category.
    categ_to_time = defaultdict(timedelta)
    for segment in segments:
        for event in segment:
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
    leaf_categ_to_categ_path = {'untracked': ['untracked']}
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

    event_dicts = []
    for i, segment in enumerate(segments):
        # Add "untracked" event between segments.
        if i > 0:
            event = Event()
            event.begin = segments[i - 1][-1].end
            event.end = segment[0].begin
            event.category = 'untracked'
            event_dicts.append(event_to_dict(event))
        for event in segment:
            event_dicts.append(event_to_dict(event))
    with open("out.json", "w") as f:
        json.dump(event_dicts, f, indent=4)
