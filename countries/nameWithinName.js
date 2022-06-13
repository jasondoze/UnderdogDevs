const assert = require("assert");
const { Console } = require("console");
const { captureRejections } = require("events");
const fs = require("fs");
const { report } = require("process");
const { resourceLimits } = require("worker_threads");
const text = fs.readFileSync("countries.txt");
const textByLine = text.toString().toLowerCase().split("\n");

//  There is at least one country name that contains another country name. Find all of these cases.
// for example, the country name Guinea-Bissau is a country name that contains Guinea, and the Democratic Republic of the Congo is a country name that contains Republic of the Congo.

// write a function that can find any word that contains another word from the same text file.

