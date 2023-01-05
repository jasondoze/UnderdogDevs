const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// Write a function that takes a string `word` as an argument and returns a count of all of the “A”s in that string.

const aCounter = (word) => {
  let obj = {};
  for (const wordz of word) {
    let count = 0;
    for (const letter of wordz) {
      if (letter.includes('a')) {
        count++;
      }
    }
    if (count > 0) {
      obj[wordz] = count;
    }
  }
  return obj;
};
console.log(aCounter(words));
