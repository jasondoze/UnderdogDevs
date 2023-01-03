const words = require('fs')
  .readFileSync('../countries.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What countries use only one vowel in their name (the vowel can be used multiple times)
// - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.

const oneVowel = (array) => {
  let pattern = /^[^aeiou]*[aeiou][^aeiou]*$/gi;
  for (const word of array) {
    if (word.match(pattern)) {
      console.log(word);
    }
  }
};
oneVowel(words);
