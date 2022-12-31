const words = require('fs')
  .readFileSync('../countries.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What country names are > 50% vowels?

// if half the length of the word matches a regex
// if word.length / 2
const fifty = (array) => {
  let count = 0;
  for (const word of array) {
    if (word.match(/[aeiou]/g)) {
      count = word.match(/[aeiou]/g).length;
      if (count > word.length / 2) {
        console.log(word);
      }
    }
  }
};
console.log(fifty(words));


