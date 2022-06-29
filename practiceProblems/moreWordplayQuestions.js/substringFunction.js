const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

/*Functions
Write a function that takes a string `substring` as an argument and returns an array of all of the words that contain that substring (the substring can appear anywhere in the word).*/

// let str = "Hello World";
// let result = str.substring(1, 4);
// let result2 = str.substring(2);
// console.log(result, result2);

function substring(substring, text) {
  let result = [];
  for (let i = 0; i < text.length; i++) {
    let word = text[i];
    if (word.includes(substring)) {
      result.push(word);
    }
  }
  return result;
}
console.log(substring("fair", words));
