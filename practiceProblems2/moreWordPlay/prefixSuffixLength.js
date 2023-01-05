const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// Write a function that takes a string `prefix` as the first argument, a string `suffix` as the second argument, and an integer `length` as the third argument. It should return an array of all of the words that start with that prefix, end with that suffix, and are that length.

const preSufLen = (array, prefix, suffix, length) => {
  return array.filter(
    (element) =>
      element.startsWith(prefix) &&
      element.endsWith(suffix) &&
      element.length === length
  );
};
console.log(preSufLen(words, 'pre', 'ed', 7));
