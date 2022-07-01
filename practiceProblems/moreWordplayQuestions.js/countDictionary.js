const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

/*
Write a function that takes a string `phrase` and returns a dictionary that contains counts of how many times every character appears in `phrase`.
*/

function countPhrase(phrase) {
  // create an empty object to store the counts
  let counts = {};
  // iterate over the phrase
  for (let i = 0; i < phrase.length; i++) {
    // reassign the iteration of phrase to letter
    let letter = phrase[i];
    // if the letter is not in the counts object, add it with a value of 1
    if (!counts[letter]) {
      counts[letter] = 1;
    } else {
      // if the letter is in the counts object, increment the value by 1
      counts[letter]++;
    }
  }
  return counts;
}

console.log(
  countPhrase(
    "Write a function that takes a string phrase and returns a dictionary that contains counts of how many times every character appears"
  )
);
