// const fs = require('fs');
// const text = fs.readFileSync('sowpods.txt');
// const words = text.toString().toLowerCase().split('\n');

// /*
// What are all of the words that are at least 8 letters long and use 3
// or fewer different letters? For example, “REFERRER” is an answer to this question,
// because it uses only 3 different letters: R, E, and F.
// */

// // create an empty more than eight array
// // filter out all of the words that are not at least 8 letters long
// // check if the filtered words use 3 or few different letters
// let atLeastEight = (wordArray) => {
//   // console.log(wordArray);
//   let overEight = [];
//   wordArray.filter((value) => {
//     // console.log(value, value.length);
//     if (value.length >= 8) {
//       overEight.push(value);
//       // console.log(overEight)
//     }
//   });
//   return overEight;
// };
// console.log(atLeastEight(words));

let charCode = (someArray) => {
  // console.log(someArray);
  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray[i].length; j++) {
      let codeAtLetters = someArray[i].charCodeAt(j);
      let letters = someArray[i][j];
      console.log(codeAtLetters, letters);
    }
  }
};
console.log(charCode(['aardvark', 'referree']));
