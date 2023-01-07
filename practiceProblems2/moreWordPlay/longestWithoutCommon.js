const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What is the longest word that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Make sure your solution can handle ties.

const longestWithout = (array) => {
  let longest = [];
  for (const word of array) {
    if (word.match(/^[^aeioshrtn]+$/g)) {
      longest.push(word);
    }
  }
  let wordLength = longest.map((element) => element.length);

  let maxLength = Math.max(...wordLength);

  return longest.filter((element) => element.length === maxLength);
};
console.log(longestWithout(words));

