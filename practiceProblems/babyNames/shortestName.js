const assert = require('assert');
const fs = require('fs');
const text = fs.readFileSync('baby_names_2020_short.txt');
const textByLine = text.toString().toLowerCase().split('\n');

// what is the shortest baby name in the names array?
function shortestBabyName(names) {
  let shortest = '';
  let shortestLength = names[0].length
  for (let i = 0; i < names.length; i++) {
    if (names[i].length < shortestLength) {
      shortest = names[i]
      shortestLength = names[i].length
    }
  }
  console.log(shortest);
}
console.log(shortestBabyName(textByLine));
