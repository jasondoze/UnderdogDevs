const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that have only “E”s for vowels and are at least 15 letters long?


const eVowels2 = (array) => {
  return array.filter((element) => element.match(/^[^aeiou]*e[^aeiou]*$/g));
};
console.log(eVowels2(words));
console.log(performance.now());
