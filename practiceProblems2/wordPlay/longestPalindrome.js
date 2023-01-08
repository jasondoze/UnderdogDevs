const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What is the longest palindrome?

const palindrome = (array) => {
  return array
    .filter((word) => word === word.split('').reverse().join(''))
    .reduce((longest, word) => (word.length > longest.length ? word : longest), '');
};

console.log(palindrome(words)); // rotavator
console.log(performance.now());
