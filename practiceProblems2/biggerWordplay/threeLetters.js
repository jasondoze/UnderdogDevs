const words = require('fs').readFileSync('../sowpods.txt').toString().toLowerCase().split('\n');

// What are all of the words that are at least 8 letters long and use 3 or fewer different letters? For example, “REFERRER” is an answer to this question, because it uses only 3 different letters: R, E, and F.

const countKeys = (array) => {
  // find all the words that are at least 8 letters long
  const eightChars = array.filter((word) => word.length >= 8);
  // use filter to split the words letters into a set and return the sets that have 3 or fewer letters
  const threeChars = eightChars.filter((word) => new Set(word.split('')).size <= 3);
  return threeChars;
};
console.log(countKeys(words));

