const words = require('fs').readFileSync('../sowpods.txt').toString().toLowerCase().split('\n');

// What is the longest word where no letter is used more than once?
const createDictionary = (wordArray) => {
  // filter out words that have duplicate letters
  const noRepeat = wordArray.filter(word => /^(?:([a-z])(?!.*\1))*$/.test(word));
  // use the reduce method to find the longest word in the noRepeat array
  const longestWord = noRepeat.reduce((longest, currentWord) => {
    // compare the length of the current word with the longest word
    // and return the word with the longest length
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}
console.log(createDictionary(words));
