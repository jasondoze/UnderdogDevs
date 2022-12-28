const words = require('fs')
  .readFileSync('sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that have all 5 vowels, in any order?
const allVowels = (array) => {
  array.filter((word) => {
    if (
      word.includes('a') &&
      word.includes('e') &&
      word.includes('i') &&
      word.includes('o') &&
      word.includes('u')
    ) {
      console.log(word);
    }
  });
};
allVowels(words);
