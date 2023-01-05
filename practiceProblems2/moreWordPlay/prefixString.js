const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// Write a function that takes a string `prefix` as an argument and returns an array of all of the words that start with that prefix (the prefix has to be at the beginning of the word).

const prefixString = (array, prefix) => {
  return array.filter((element) => element.startsWith(prefix));
};
console.log(prefixString(words, 'pre'));
