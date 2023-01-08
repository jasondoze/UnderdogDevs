const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// Create and print an array containing all of the words that end in "GHTLY"
const contains = (array) => {
  let target = /ghtly$/g;
  return array.filter((word) => word.match(target));
};
console.log(contains(words));
