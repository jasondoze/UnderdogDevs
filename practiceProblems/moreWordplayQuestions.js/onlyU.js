const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

// What are all of the words that have only “U”s for vowels and no "A"s, "E"s, "I"s, or "O"s?
// function onlyU(allWords) {
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (
//       !word.includes("a") &&
//       !word.includes("e") &&
//       !word.includes("i") &&
//       !word.includes("o")
//     ) {
//       console.log(word);
//     }
//   }
// }

// onlyU(words);

// create the same function as above but with a for each loop
// function onlyU2(allWords) {
//     allWords.forEach((word) => {
//         if (
//         !word.includes("a") &&
//         !word.includes("e") &&
//         !word.includes("i") &&
//         !word.includes("o")
//         ) {
//         console.log(word);
//         }
//     });
// }

// onlyU2(words);

// create the same function as above with .map()
// function onlyU3(allWords) {
//   let onlyUWords = allWords.map((word) => {
//     if (
//       !word.includes("a") &&
//       !word.includes("e") &&
//       !word.includes("i") &&
//       !word.includes("o")
//     ) {
//       return word;
//     }
//   }).filter((word) => word !== undefined);
//   return onlyUWords;
// }
// console.log(onlyU3(words));

// create the same function as above with .filter()
// function onlyU4(allWords) {
//   let onlyUWords = allWords.filter((word) => {
//     if (
//       !word.includes("a") &&
//       !word.includes("e") &&
//       !word.includes("i") &&
//       !word.includes("o")
//     ) {
//       return word;
//     }
//   }
//   );
//     return onlyUWords;
// }
// console.log(onlyU4(words));

// create the same function as above with .reduce()
// function onlyU5(allWords) {
//     // allWords.reduce has two arguments, the first is the accumulator,
//     // the second is the current value
//   let onlyUWords = allWords.reduce((acc, word) => {
//     if (
//       !word.includes("a") &&
//       !word.includes("e") &&
//       !word.includes("i") &&
//       !word.includes("o")
//     ) {
//       acc.push(word);
//     }
//     return acc;
//   }
//   , []);
//   return onlyUWords;
// }
// console.log(onlyU5(words));
