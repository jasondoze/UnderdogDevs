const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words containing a Q but not a U?
const contains = (array) => {
  array.filter((word) => {
    if (word.includes('q') && !word.includes('u')) {
      console.log(word);
    }
  });
};
contains(words);
