// const { match } = require('assert');
const fs = require('fs');
const text = fs.readFileSync('sowpods.txt');
const words = text.toString().toLowerCase().split('\n');

// What is the longest word that has no repeating letters?

function createDictionary(wordArray) {
  // create an empty array result variable
  let noRepeat = [];
  // iterate over the word array
  for (let i = 0; i < wordArray.length; i++) {
    // assign a no dupes variable that tests if regex has no more than one 
    // sequential letter in the word: returns true or false
    let hasNoDupes = !/([a-z])\1/.test(wordArray[i]);
    // if the variable is true, it has no duplicates
    if (hasNoDupes === true) {
      // so push the non duplicates to the no repeat array
      noRepeat.push(wordArray[i]);
    }
  }
  // assign a longest word empty string
  let longestWord = '';
  // assign a longest length variable to 0
  let longestLength = 0;
  // iterate over the no repeat array
  for (let j = 0; j < noRepeat.length; j++) {
    // let max = Math.max(noRepeat[j].length);
    // console.log(max);
    // if the word at j.length is greater than 0
    if (noRepeat[j].length > longestLength) {
      // longestLength is reassigned to noRep[j].length
      longestLength = noRepeat[j].length;
      // longesWord is reassigned to noRep[j]
      longestWord = noRepeat[j];
    }
  }
  return longestWord;
}

console.log(createDictionary(words));
// output: aboriginalities 

// length of 15, same as largest from max variable
