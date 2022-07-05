const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");
const assert = require("assert");

/*
What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.
*/

function longestRSTLNE(allWords) {
  // console.log(typeof allWords);
  if (Array.isArray(allWords)) {
    console.log("allWords is an array");
  }
  let longest = "";

  let result = [];
  const letters = ["r", "s", "t", "l", "n", "e"];

  for (let i = 0; i < allWords.length; i++) {
    let currWord = allWords[i];
    let wordArray = currWord.split("");
    // for every letter in the current word, is that included in letters
    if (wordArray.every((letter) => letters.includes(letter))) {
      result.push(currWord);
    }
  }
  for (let j = 0; j < result.length; j++) {
    if (result[j].length > longest.length) {
      longest = result[j];
      // console.log(longest);
      // console.log(typeof longest);
    }
  }
  return longest;
}

// console.log(longestRSTLNE(words));

function testRESTLNE() {
  // assert.deepEqual("", "");
  // assert.deepEqual(longestRSTLNE(''), '');

  assert.deepEqual(
    longestRSTLNE(["eel", "entente", "ententes", "letterers"]),
    "letterers"
  );
  // assert.deepEqual(
  //   longestRSTLNE(["eel", "entente", "ententesees", "letterers"]),
  //   "letterers"
  // );

  console.log("all tests passed");
}
testRESTLNE();
