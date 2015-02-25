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

Pull requests are welcome :)

When you first clone the repo, run `npm install` to download the necessary
dependencies.

The project is structured as follows: `src` contains the visualization code,
`sample-data` contains a sample CSV dataset, and `tools` contains scripts to
convert datasets from CSV to JSON and vice versa. `bundle` contains the
necessary files to run Ticktockman in a browser.

Within `src`, the main data structures are described above the `preprocessData`
function in `app.js`. The three visualizations appearing on the main page are
in `eachday.js` (time spent by date), `sunburst.js` (time spent by activity),
and `streamgraph.js` (changes from week to week).

When you make changes to the code in `src`, run `make bundle` to update the
packaged code in `bundle`, so you can see your changes in the browser.

To run Ticktockman in the browser, run `make runserver`.

To run the unit tests, run `make test`.
