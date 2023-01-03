const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?

const wordProIng = (array) => {
  return array.filter(
    (element) => element.startsWith('pro') && element.endsWith('ing')
  );
};
console.log(wordProIng(words));
