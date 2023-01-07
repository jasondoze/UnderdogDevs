const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What is the longest word that contains no vowels?

const contains = (array) => {
  let longestWord = '';
  let noVowels = /^[^aeiou]+$/g;
  for (const word of array) {
    if (word.match(noVowels) && word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};
console.log(contains(words));
