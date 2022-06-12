
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

// function oneVowel(input) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let result = [];
//   let firstVowel = undefined;
//   let hasOneVowel = false;
//   for (let i = 0; i < input.length; i++) {
//       const word = input[i];
//     //   console.log(word);
//     for (let j = 0; j < word.length; j++) {
//         const letter = word[j];
//         // console.log(letter);
//       if (vowels.includes(letter)) {
//           firstVowel = letter;
//         //   console.log(firstVowel);
//         hasOneVowel = true;
//       } else if (letter !== firstVowel) {
//         hasOneVowel = false;
//         continue;
//       }
//     }
//     if (hasOneVowel) {
//       result.push(word);
//     }
//   }
//   return result;
// }
// console.log(oneVowel(textByLine));

