## Ticktockman

Ticktockman visualizes time-tracking data, so you can spend more time doing
what makes you happy. [See a demo here.](TODO)

Ticktockman is meant for _personal_ time tracking, i.e. tracking your entire
day to get an understanding of how you spend your time. Ticktockman is not
designed for project time tracking / billing purposes.


## How to use

TODO describe JSON format, csv format, etc.


## Known issues

* On some versions of Chrome, you cannot paste large amounts of text into the
  "load data" dialog. This is a [known
  bug](http://code.google.com/p/chromium/issues/detail?id=367549).


## Contributing

Pull requests are welcome.

Project structure: `sample-data` contains a sample dataset in CSV format.
`pytools` contains tools to convert a dataset from CSV format into JSON format.
`jsapp` contains the main JavaScript application to visualize a dataset in JSON
format.

Within `jsapp`, the main data structures are described above the
`preprocessData` function in `app.js`. The three visualizations appearing on
the main page live in `eachday.js` (time spent by date), `sunburst.js` (time
spent by activity), and `streamgraph.js` (changes from week to week).

To run the code linter, use `jshint *.js`.

To run the qunit tests, use `mocha -u qunit`.

TODO: explain dev setup and required global node packages.
