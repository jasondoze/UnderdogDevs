const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that have no E or A and are at least 15 letters long?
const contains = (array) => {
  return array.filter(
    (word) => !word.includes('e') && !word.includes('a') && word.length >= 15
  );
};

console.log(contains(words));
