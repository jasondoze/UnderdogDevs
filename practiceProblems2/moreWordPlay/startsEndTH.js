const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that both start with a “TH” and end with a “TH”?

const wordsTh = (array) => {
  return array.filter(
    (element) => element.startsWith('th') && element.endsWith('th')
  );
};
console.log(wordsTh(words))