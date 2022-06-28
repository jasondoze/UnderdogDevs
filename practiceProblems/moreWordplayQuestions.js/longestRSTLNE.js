const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

/*
What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.
*/

function longestRSTLNE(allWords) {
  let shortest = [0];

  let result = [];
  const letters = ["r", "s", "t", "l", "n", "e"];

  for (let i = 0; i < allWords.length; i++) {
    let currWord = allWords[i];
    let wordArray = currWord.split("");
    // for every letter in the current word, is that included in letters
    if (wordArray.every((letter) => letters.includes(letter))) {
      result.push(currWord);
    }
  }
  for (let j = 0; j < result.length; j++) {
    if (result[j].length > shortest.length) {
      shortest = result[j];
      return shortest;
    }
  }
}

console.log(longestRSTLNE(words));
