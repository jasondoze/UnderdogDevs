
const fs = require("fs");
const text = fs.readFileSync("curlCountries.txt", {
  encoding: "utf8",
  flag: "r",
});

// What countries use only one vowel in their name (the vowel can be used multiple times)
// For example, if the word "BEEKEEPER" were a country, it would be an answer, because it only uses "E".

// for (const country of countryArr) {
//   let firstVowel = undefined;
//   let hasOneVowel = false;

//   for (const letter of country) {
//     if (vowels.includes(letter)) {
//       if (!firstVowel) {
//         firstVowel = letter;
//         hasOneVowel = true;
//       } else if (letter !== firstVowel) {
//         hasOneVowel = false;
//         continue;
//       }
//     }
//   }

//   if (hasOneVowel) {
//     countryHasSingleVowel.push(country);
//   }
// }
// console.log({ countryHasSingleVowel });


