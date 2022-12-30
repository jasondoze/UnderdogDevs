const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that have a B and an X and are less than 5 letters long?
const contains = (array) => {
  array.filter((word) => {
    if (word.includes('b') && word.includes('x') && word.length < 5) {
      console.log(word);
    }
  });
};
contains(words);
