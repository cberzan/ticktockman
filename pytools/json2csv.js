#!/usr/bin/env node

/*
 * Convert JSON dataset to CSV dataset.
 * Usage: ./json2csv.js input.json outdir
 * This will produce outdir/ontology.txt and outdir/segment-{1,2,...}.txt.
 */

var fs = require('fs');
var path = require('path');
var _ = require('underscore');

var ticktockman = require('../src/app.js');

// Recursive helper for outputSegmentTxt().
var outputOntologyNode = function(lines, node, prefix) {
    lines.push(prefix + node.name);
    _.each(node.children, function(child) {
        outputOntologyNode(lines, child, prefix + "    ");
    });
};

// Take ticktockman categories data structure and return the corresponding
// ontology tree as a string.
var outputOntologyTxt = function(categories) {
    var lines = [];
    // We do not output the "root" node itself, just its children.
    _.each(categories.root.children, function(child) {
        outputOntologyNode(lines, child, "");
    });
    return lines.join("\n");
};

// Take events in JSON formats, and split them into segments by getting rid of
// any events in the "untracked" category. Returns a list of segments, where
// each segment is a list of events.
var splitEventsIntoSegments = function(events) {
    var segments = [];
    var currentSegment = [];
    var finishSegment = function() {
        if (currentSegment.length > 0) {
            segments.push(currentSegment);
            currentSegment = [];
        }
    };
    _.each(events, function(evnt) {
        if (evnt.category.name == "untracked") {
            finishSegment();
        } else {
            currentSegment.push(evnt);
        }
    });
    finishSegment();
    return segments;
};

// Take a list of events and return the corresponding CSV file as a string.
var outputSegmentTxt = function(segment) {
    var lines = [];

    // CSV header:
    lines.push("date,date_comment,end_time,category,comment");

    // A dummy row for the begin time of the first event:
    lines.push(
        segment[0].begin.format("YYYY-MM-DD") + ",," +
        segment[0].begin.format("HH:mm") + ",dummy,");

    // A row for the end time of every event:
    _.each(segment, function(evnt, index) {
        // We output the date only when the date changes.
        var line = "";
        if (evnt.end.date() != evnt.begin.date()) {
            line = evnt.end.format("YYYY-MM-DD");
        }
        line += ",," + evnt.end.format("HH:mm");
        line += "," + evnt.category.name + ",";
        if (evnt.comment !== undefined) {
            line += evnt.comment;
        }
        lines.push(line);
    });

    return lines.join("\n");
};

var main = function() {
    // Parse command-line args.
    if (process.argv.length != 4) {
        console.log("Usage: json2csv data.json outdir");
        process.exit(1);
    }
    var jsonPath = process.argv[2];
    var outdirPath = process.argv[3];

    // Read input file and build ticktockman data structures.
    // Note that preprocessData() sets the begin, end, and category properties
    // of the events in-place.
    var events = JSON.parse(fs.readFileSync(jsonPath));
    var categories = ticktockman.preprocessData(events).categories;
    delete categories.root.children.untracked;

    // Create output dir if it does not exist.
    try {
        fs.mkdirSync(outdirPath);
    } catch(err) {
        if (err.code != 'EEXIST') {
            throw err;
        }
    }

    // Write out ontology.
    var ontologyPath = path.join(outdirPath, "ontology.txt");
    var ontologyTxt = outputOntologyTxt(categories);
    fs.writeFileSync(ontologyPath, ontologyTxt);
    console.log("wrote " + ontologyPath);

    // Write out event segments.
    var segments = splitEventsIntoSegments(events);
    _.each(segments, function(segment, index) {
        var fileName = "segment-" + (index + 1) + ".csv";
        var segmentPath = path.join(outdirPath, fileName);
        var segmentTxt = outputSegmentTxt(segment);
        fs.writeFileSync(segmentPath, segmentTxt);
        console.log("wrote " + segmentPath);
    });

    console.log("done!");
};

if (require.main === module) {
    main();
}
