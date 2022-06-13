const fs = require("fs");
const text = fs.readFileSync("countries/curlCountries.txt", {
  encoding: "utf8",
  flag: "r",
});

// What countries use only one vowel in their name (the vowel can be used multiple times)
// For example, if the word "BEEKEEPER" were a country, it would be an answer, because it only uses "E".
function oneVowel(input) {
  let countries = input.split("\n");
  let result = [];
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let vowels = country.match(/[aeiou]/gi);
    // if the country has multiple vowels and all the vowels are the same letter, push it to the result array
    if (
      vowels &&
      vowels.length > 1 &&
      vowels.every((vowel) => vowel === vowels[0])
    ) {
      result.push(country);
    }
  }
  return result;
}
console.log(oneVowel(text));

