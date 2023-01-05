const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated.

const rstlne = (array) => {
  for (const word of array) {
    // tried /^[^rstlne]*$/ also
    if (word.match(/^[rstlne]+$/g)) {
      console.log(word);
    }
  }
};
rstlne(words);

