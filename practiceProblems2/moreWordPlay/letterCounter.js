const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// Write a function that takes a string `word` as the first argument, a string `letter` as the second argument, and returns a count of how many times `letter` occurs in `word`.

const letterCounter = (word, letter) => {
  let obj = {};
  for (const strings of word) {
    let count = 0;
    for (const letters of strings) {
      if (letters.includes(letter)) {
        count++;
      }
    }
    if (count > 0) {
      obj[strings] = count;
    }
  }
  return obj;
};
console.log(letterCounter(words, 'e'));
console.log(performance.now());
