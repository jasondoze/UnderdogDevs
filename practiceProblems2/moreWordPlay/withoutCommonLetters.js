const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)?

const withoutLetters = (array) => {
  for (const word of array) {
    if (word.match(/^[^aeioshrtn]+$/g)) {
      console.log(word);
    }
  }
};
withoutLetters(words);
