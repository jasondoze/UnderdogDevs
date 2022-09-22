const fs = require('fs');
const text = fs.readFileSync('sowpods.txt');
const words = text.toString().toLowerCase().split('\n');

// create an empty no repeat object varible
// create an longest empty array variable
// iterate over the words array
// iterate over the characters of the word
// check if the word has no repeating characters
// if it doesnt, push those words into the no repeat array
// then find the longest of those non repeat words and push to longest array
// return longest array

// // What is the longest word that has no repeating letters?
function longestNoRepeat(words) {
  let wordObj = {};
  console.log(words);
}

console.log(longestNoRepeat(words));

// // b, a, n, a
