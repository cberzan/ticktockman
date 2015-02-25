/* global window */

// Run ticktockman in the browser.
// Assume window.sampleData is defined.
var app = require("./app.js");
app.setup();
app.loadData(window.sampleData);
