const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.

const shortestProIng = (array) => {
  return array
    .filter((element) => element.startsWith('th') && element.endsWith('ing'))
    .reduce((a, b) => (a.length <= b.length ? a : b));
};
console.log(shortestProIng(words));


