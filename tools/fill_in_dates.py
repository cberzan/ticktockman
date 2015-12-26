#!/usr/bin/env python

# Fill in missing values for start_date, start_time, end_date.
#
# Usage: ./fill_in_dates.py in.csv out.csv
#
# Values are allowed to be missing as described in `events.read_events_csv`.


import argparse

from events import read_events_csv
from events import write_events_csv


if __name__ == "__main__":
    # Parse command-line args.
    parser = argparse.ArgumentParser(
        description="Fill in missing values in CSV time-tracking data.")
    parser.add_argument('in_csv_path', help="path to input CSV file")
    parser.add_argument('out_csv_path', help="path to output CSV file")
    args = parser.parse_args()

    # Read events and print summary.
    print "Reading events from {}...".format(args.in_csv_path)
    with open(args.in_csv_path) as f:
        events = read_events_csv(f)
    print " -> Read {} events spanning from {} to {}".format(
        len(events), events[0].begin, events[-1].end)

    # Write events with inferred missing values.
    print "Writing events to {}...".format(args.out_csv_path)
    with open(args.out_csv_path, 'w') as f:
        write_events_csv(events, f)
    print " -> Done."

    # Sanity check by re-reading the file we just wrote.
    print "Sanity-checking the two CSV files against each other..."
    with open(args.out_csv_path) as f:
        events_back = read_events_csv(f)
    assert len(events_back) == len(events), "event count does not match"
    for i in xrange(len(events)):
        if events_back[i] != events[i]:
            print "event_orig: {}".format(events[i])
            print "event_back: {}".format(events_back[i])
            assert False, "events do not match on line {}".format(i + 2)
    print " -> Looks good."
