const words = require('fs')
  .readFileSync('../countries.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What countries both begin and end with a vowel?

const beginEnd = (array) => {
  let pattern = /^[aeiou].*[aeiou]$/g
  for (const word of array) {
    if (word.match(pattern)) {
      console.log(word);
    }
  }
};
beginEnd(words);
