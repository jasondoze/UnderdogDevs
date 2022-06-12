const assert = require("assert");
const { Console } = require("console");
const { captureRejections } = require("events");
const fs = require("fs");
const { report } = require("process");
const { resourceLimits } = require("worker_threads");
const text = fs.readFileSync("countries.txt");
const textByLine = text.toString().toLowerCase().split("\n");

// What is the shortest country name? Make sure your solution can handle ties.

function shortest(input) {
    let shortest = '';
    let longest = Infinity;
    for (let i = 0; i < input.length; i++) {
        if (input[i].length < longest) {
                 shortest = input[i];
            longest = input[i].length;
            // console.log(longest);
        }
    }
    return shortest;
}
console.log(shortest(textByLine));

function shortest(textByLine) {
    console.log(textByLine.reduce((shortest, current) => (current.length < shortest.length ? current : shortest)))
}
shortest(textByLine);

function longest(textByLine) {
    console.log(textByLine.reduce((longest, current) => (current.length > longest.length ? current : longest)))
}
longest(textByLine);