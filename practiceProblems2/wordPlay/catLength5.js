const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that contain the word CAT and are exactly 5 letters long?
const contains = (array) => {
  return array.filter((word) => word.includes('cat') && word.length === 5);
};
console.log(contains(words));
