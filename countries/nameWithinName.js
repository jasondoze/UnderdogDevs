const assert = require("assert");
const { Console } = require("console");
const { captureRejections } = require("events");
const fs = require("fs");
const { report } = require("process");
const { resourceLimits } = require("worker_threads");
const text = fs.readFileSync("countries.txt");
const textByLine = text.toString().toLowerCase().split("\n");

//  There is at least one country name that contains another country name. Find all of these cases.

function countryWithinCountry(input) {}

console.log(countryWithinCountry(textByLine));
