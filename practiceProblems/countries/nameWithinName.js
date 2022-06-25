const assert = require("assert");
const { Console, count } = require("console");
const { captureRejections } = require("events");
const fs = require("fs");
const { report } = require("process");
const { resourceLimits } = require("worker_threads");
const text = fs.readFileSync("countries.txt");
const textByLine = text.toString().toLowerCase().split("\n");

//  There is at least one country name that contains another country name. Find all of these cases.
// for example, the country name Guinea-Bissau is a country name that contains Guinea,
// and the Democratic Republic of the Congo is a country name that contains Republic of the Congo.

// decomposition
// returns true if a containa b, false otherwise
function countryContains(countryA, countryB) {}

// returns an array of arrays, one array for each pair
// ["United States", "France", "England"] => [["United States", "France"], ["United States", "England"], ["France", "England"]]
// first answer: ["United States", "France", "United States", "England", "France", "England"]
// second answer: [["United States", "France"], ["United States", "England"], ["France", "England"]]

// Example input: ["United States", "France", "England"]

// At end of loop:
// i: 1
// pairs: [["United States", "France"], ["France, "England"]]
// crash at l33 i=2
// question/homework -- how do we fix the crash
function allPairs(countries) {
  let pairs = [];
  for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < countries[i].length; j++) {
      let pair = [countries[i], countries[j]];
      pairs.push(pair);
    }
  }
  return pairs;
}
// if country A === country B then that is not a country within a country
// function countryWithinCountry(countries) {}
console.log(allPairs(textByLine));

/* ignore code for now

  Guinea-Bissau
  United States
  France
  Guinea
*/
