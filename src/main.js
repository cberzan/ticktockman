var Papa = require("papaparse");

// Run ticktockman in the browser and load data.csv.
var app = require("./app.js");
app.setup();
Papa.parse("data.csv", {
  download: true,
  header: true,
  skipEmptyLines: true,
  complete: app.loadDataCSV,
});
