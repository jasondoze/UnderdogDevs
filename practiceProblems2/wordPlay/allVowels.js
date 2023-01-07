const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that have all 5 vowels, in any order?
const allVowels = (array) => {
  let vowels = /(?=.*a)(?=.*e)(?=.*i)(?=.*o)(?=.*u)[a-z]*/g;
  for (const word of array)
    if (word.match(vowels)) {
      console.log(word);
    }
};
allVowels(words);
