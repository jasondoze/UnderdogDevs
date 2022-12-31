const words = require('fs')
  .readFileSync('../countries.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the countries that have “United” in the name?

const united = (array) => {
  let pattern = /united/g;
  for (const word of array) {
    if (word.match(pattern)) {
      console.log(word);
    }
  }
};
united(words);
