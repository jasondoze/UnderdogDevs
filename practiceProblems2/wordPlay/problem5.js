const words = require('fs')
  .readFileSync('sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that have no E or A and are at least 15 letters long?
const contains = (array) => {
  array.filter((word) => {
    if (!word.includes('e') && !word.includes('a') && word.length >= 15) {
      console.log(word);
    }
  });
};
contains(words);
