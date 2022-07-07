const assert = require("assert");
const fs = require("fs");
const text = fs.readFileSync("countries.txt");
const textByLine = text.toString().toLowerCase().split("\n");

// What countries use only one vowel in their name (the vowel can be used multiple times)
// For example, if the word "BEEKEEPER" were a country, it would be an answer, because it only uses "E".

function oneVowel(countries) {
  let oneVowelCountries = [];

  // iterate over the array, assign country to each element
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    // console.log(country);

    // change to xyz or something as a match
    let vowels = country.match(/[aeiou]/gi);
    // The every() method tests whether all elements in the array pass the test
    // implemented by the provided function. It returns a Boolean value.

    // for every entry in vowels, lets call that currChar => for currChar in vowels, does it equal to the first character in vowels
    if (vowels.every((currChar) => currChar === vowels[0])) {
      oneVowelCountries.push(country);
    }
  }
  return oneVowelCountries;
}
console.log(oneVowel(textByLine));
