const fs = require('fs');
const text = fs.readFileSync('sowpods.txt');
const wordList = text.toString().toLowerCase().split('\n');

/*
Write a function that takes a string `word` as an argument and returns a count of all of the “A”s in that string.
*/

function countAs(word) {
  let count = 0
  for (let i = 0; i < word.length; i++) {
    if (word[i].includes('a')) {
      count++;
    }
  }
  return count;
}

console.log(countAs('abracadabra'));