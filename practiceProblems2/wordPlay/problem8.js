const words = require('fs')
  .readFileSync('sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words with no vowel and not even a Y?

const noVowel = (array) => {
  const vowels = /[aeiouy]/g;
  for (const word of array) {
    if (!word.match(vowels)) {
      console.log(word);
    }
  }
};
noVowel(words);
