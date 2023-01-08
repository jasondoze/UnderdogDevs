const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What is the longest word that contains no vowels?

// Make it handle ties.

const contains = (array) => {
  let noVowels = /^[^aeiou]+$/g;
  return array
    .filter((word) => noVowels.test(word))
    .reduce((longest, word) => (word.length > longest.length ? word : longest));
};
console.log(contains(words)); // nymphly
console.log(performance.now()) // 121.75557804107666



const contains2 = (array) => {
  // Regular expression to match words that contain no vowels
  let noVowels = /^[^aeiou]+$/g;

  // Filter the array to only contain words that contain no vowels
  let noVowelWords = array.filter((word) => noVowels.test(word));

  // Find the maximum length of the words that contain no vowels
  const maxLength = noVowelWords.reduce((longest, word) => {
    return word.length > longest ? word.length : longest;
  }, 0);

  // Filter the noVowelWords array to only contain words that have the maximum length
  return noVowelWords.filter((word) => word.length === maxLength);
};

console.log(contains2(words)); // [ 'nymphly', 'rhythms', 'tsktsks' ]
console.log(performance.now()) // 125.80059695243835

