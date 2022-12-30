const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// Create and print an array containing all of the words that end in "GHTLY"
const contains = (array) => {
  let result = [];
  let target = /ghtly$/g;
  for (let word of array) {
    if (word.match(target)) {
      result.push(word);
    }
  }
  return result;
};
console.log(contains(words));
