## Ticktockman

Ticktockman visualizes time-tracking data, so you can spend more time doing
what makes you happy. [See a demo here.](https://cberzan.github.io/ticktockman/)

Ticktockman is meant for _personal_ time tracking, i.e. tracking your entire
day to get an understanding of how you spend your time. Ticktockman is not
designed for project time tracking or billing purposes.


## How to use

### If you already have time-tracking data

If you already have time-tracking data, you can visualize it with Ticktockman
if you convert it to the appropriate JSON format. You need to provide a list of
events, where each event is an object with the following properties:

- `begin`: the event's start time encoded in ISO-8601
- `end`: the event's end time encoded in ISO-8601
- `category`: the event's hierarchical category, as an array of strings (e.g.
  `["a", "b"]` stands for subcategory "b" of category "a")

Here is an example:

    [{
        "category": [ "work", "homework" ],
        "begin": "2014-11-04T16:51:00",
        "end": "2014-11-04T19:03:00"
    },
    {
        "category": [ "work", "side_projects", "topsecret" ],
        "begin": "2014-11-04T19:03:00",
        "end": "2014-11-04T19:19:00"
    },
    ...]

The events must cover a contiguous stretch of time, without overlapping. This
means the end time of an event must be equal to the start time of the next
event.

To see a larger example, look at the demo dataset in `bundle/data.js`.


### If you want to start collecting time-tracking data

You can start collecting time-tracking data in a spreadsheet with the following
columns:

- `date`: the event date in `YYYY-MM-DD` format
- `date_comment`: currently ignored
- `end_time`: the end time of the event, in `HH:mm` format (the start time of
  the event is implicitly defined by the end time of the previous event)
- `category`: the event's leaf category (described further below)
- `comment`: currently ignored

The `date` column should be filled only for rows where the date changes, i.e.
for the first event in the spreadsheet, and for all events that cross the
midnight boundary.

Save the file in CSV format. Each such file is called a _segment_, and covers a
contiguous stretch of time during which you did time tracking. Ticktockman
supports multiple segments, separated by intervals of untracked time.

The small example above corresponds to the following segment.csv. (Note the
dummy event to encode the start time of the first actual event.)

    date,date_comment,end_time,category,comment
    2014-11-04,,16:51,dummy,
    ,,19:03,homework,
    ,,19:19,topsecret,

To speed up data entry, the CSV file only contains the leaf category of an
event (e.g. `topsecret` for an event in category `work / side_projects /
topsecret`). You need an additional file called `ontology.txt`, which describes
the full hierarchy of categories. The ontology for the small example above is:

    work
        homework
        side_projects
            topsecret

To see a larger example, look at the demo dataset in `sample-data`.

Once you have some data, you can convert it to JSON as follows:

```
tools/csv2json.py ontology.txt segment-1.csv [segment-2.csv ...]
```

This will produce an `out.json` file. To visualize the data, paste the contents
of `out.json` into a running instance of Ticktockman in the browser.


## Known issues

* On some versions of Chrome, you cannot paste large amounts of text into the
  "load data" dialog. This is a [known
  bug](http://code.google.com/p/chromium/issues/detail?id=367549).


## Contributing

Pull requests are welcome :)

When you first clone the repo, run `npm install` to download the necessary
dependencies.

The project is structured as follows: `src` contains the visualization code,
`sample-data` contains a sample CSV dataset, and `tools` contains scripts to
convert datasets from CSV to JSON and vice versa. `bundle` contains the
necessary files to run Ticktockman in the browser.

Within `src`, the main data structures are described above the `preprocessData`
function in `app.js`. The three visualizations appearing on the main page are
in `eachday.js` (time spent by date), `sunburst.js` (time spent by activity),
and `streamgraph.js` (changes from week to week).

To run Ticktockman locally:

```
cd src
make bundle
make runserver
```

Then point your browser to [http://localhost:8889/](http://localhost:8889/).
When you make changes to the code in `src`, run `make bundle` again and refresh
the page.

To run the unit tests:

```
(cd src; make test)
(cd tools; nosetests --with-doctest)
```

TODO:
- new CSV format: attributes, times without ':'
