const fs = require("fs");
const text = fs.readFileSync("baby_names_2020_short.txt");
const scrabbleText = fs.readFileSync("sowpods.txt");
const textByLine = text.toString().toLowerCase().split("\n");
const scrabbleTextByLine = scrabbleText.toString().toLowerCase().split("\n");
// this creates a set from the array of scrabble words
const scrabbleSet = new Set(scrabbleTextByLine);

// node scrabble.js | more  - to see more of the list in the terminal

// There is at least one baby name from the top 40 baby names for 2020 that,
// when spelled backwards, is a valid Scrabble word. Find and print all such names.

// Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary(or set)
// to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under
// each implementation. Why is the time different ?

// time node scrabble.js to check the time the function takes to run

function scrabbleWord(names, words) {
  const validWord = [];
  for (let i = 0; i < names.length; i++) {
    const reverseName = names[i].split("").reverse().join("");
    for (let j = 0; j < words.length; j++) {
      if (reverseName === words[j]) {
        validWord.push(words[j]);
      }
    }
  }
  return validWord;
}

console.log(performance.now()); // 246.3167781829834
console.log(scrabbleWord(textByLine, scrabbleTextByLine));

function scrabbleWord(names, words) {
  const validWord = [];
  for (let i = 0; i < names.length; i++) {
    const reverseName = names[i].split("").reverse().join("");
    // use set
    if (words.has(reverseName)) {
      validWord.push(reverseName);
    }
  }
  return validWord;
}
console.log(performance.now()); //245.44049096107483
console.log(scrabbleWord(textByLine, scrabbleSet));
