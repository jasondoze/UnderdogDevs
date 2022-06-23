const assert = require("assert");
const { Console } = require("console");
const { captureRejections } = require("events");
const fs = require("fs");
const { report } = require("process");
const { resourceLimits } = require("worker_threads");
const text = fs.readFileSync("baby_names_2020_short.txt");
const textByLine = text.toString().toLowerCase().split("\n");

// There is at least one baby name from the top 40 baby names for 2020 that,
// when spelled backwards, is a valid Scrabble word. Find and print all such names.


