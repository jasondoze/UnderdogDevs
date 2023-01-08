const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that both start and end with a Y?
const contains = (array) => {
  return array.filter((word) => word.startsWith('y') && word.endsWith('y'));
};
console.log(contains(words));
