const words = require('fs')
  .readFileSync('sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that both start and end with a Y?
const contains = (array) => {
  for (const word of array) {
    if (word.startsWith('y') && word.endsWith('y')) {
      console.log(word);
    }
  }
};
contains(words);
