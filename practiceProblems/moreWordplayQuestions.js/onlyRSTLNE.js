const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

// What are all of the words that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated.

function onlyRSTLNE(text) {
  let result = [];
  // create an array of the allowed letters
  const letters = ["r", "s", "t", "l", "n", "e"];
  // iterate over the array of words
  for (let i = 0; i < text.length; i++) {
    // reassign the iteration of words to word
    let word = text[i];
    // declare a variable to split the word into an array of chars
    let wordArray = word.split("");
    // console.log(wordArray);
    if (wordArray.every((letter) => letters.includes(letter))) {
      result.push(word);
    }
  }
  return result;
}
console.log(onlyRSTLNE(words));
