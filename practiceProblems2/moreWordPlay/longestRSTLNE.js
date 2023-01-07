const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.

const longestRSTLNE = (array) => {
  let longest = [];
  for (const word of array) {
    if (word.match(/^[rstlne]+$/g)) {
      longest.push(word);
    }
  }
  let wordLength = longest.map((element) => element.length);

  let maxLength = Math.max(...wordLength);

  return longest.filter((element) => element.length === maxLength);
};
console.log(longestRSTLNE(words));

