const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that contain the word CAT and are exactly 5 letters long?
const contains = (array) => {
  array.filter((word) => {
    if (word.includes('cat') && word.length === 5) {
      console.log(word);
    }
  });
};
contains(words);
