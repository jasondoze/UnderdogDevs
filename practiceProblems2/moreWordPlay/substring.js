const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// Write a function that takes a string `substring` as an argument and returns an array of all of the words that contain that substring (the substring can appear anywhere in the word).
const subString = (array, substring) => {
  return array.filter((element) => element.incudes(substring));
};
console.log(subString(words, 'cat'));
