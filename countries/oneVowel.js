const assert = require("assert");
const { Console, count } = require("console");
const { captureRejections } = require("events");
const fs = require("fs");
const { report } = require("process");
const { resourceLimits } = require("worker_threads");
const text = fs.readFileSync(
  "/Volumes/My Passport for Mac - Data/UnderDog_Devs/UnderdogDevs/countries/countries.txt"
);
const textByLine = text.toString().toLowerCase();

// What countries use only one vowel in their name (the vowel can be used multiple times)
// For example, if the word "BEEKEEPER" were a country, it would be an answer, because it only uses "E".

function oneVowel(text) {
  let countries = text.split("\n");
  let oneVowelCountries = [];
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    console.log(country);
    let vowels = country.match(/[aeiou]/gi);
    // The every() method tests whether all elements in the array pass the test
    // implemented by the provided function. It returns a Boolean value.
    if (vowels.every((vowel) => vowel === vowels[0])) {
      oneVowelCountries.push(country);
    }
  }
  return oneVowelCountries;
}
console.log(oneVowel(textByLine));
