const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What is the longest palindrome?

const palindrome = (array) => {
  for (const word of array) {
    if (word.split('').reverse().join('') === word) {
      console.log(word);
    }
  }
};
palindrome(words);
