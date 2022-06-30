const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const list = text.toString().toLowerCase().split("\n");

/* Write a function that takes a string `word` as the first argument, a string `letter` as the second argument, and returns a count of how many times `letter` occurs in `word`.
 */

function countLetter(word, letter) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].includes(letter)) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("contamination", "t"));
