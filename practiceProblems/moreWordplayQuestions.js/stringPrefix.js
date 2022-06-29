const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

/*Write a function that takes a string `prefix` as an argument and returns an array of all of the words that start with that prefix (the prefix has to be at the beginning of the word).*/

function prefixStart(prefix, words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(prefix)) {
      result.push(words[i]);
    }
  }
  return result;
}
console.log(prefixStart("lot", words));
