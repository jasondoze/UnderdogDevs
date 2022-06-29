const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

/* Write a function that takes a string `prefix` as the first argument, a string `suffix` as the second argument, and an integer `length` as the third argument. It should return an array of all of the words that start with that prefix, end with that suffix, and are that length.*/

function strtEndLngth(prefix, suffix, length, words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (
      words[i].startsWith(prefix) &&
      words[i].endsWith(suffix) &&
      words[i].length === length
    ) {
      result.push(words[i]);
    }
  }
  return result;
}

console.log(strtEndLngth("ab", "es", 9, words));
