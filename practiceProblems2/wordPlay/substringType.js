const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// How many words contain the substring "TYPE”?

const contains = (array) => {
  let target = /type/g;
  for (const word of array) {
    if (word.match(target)) {
      console.log(word);
    }
  }
};
contains(words);
