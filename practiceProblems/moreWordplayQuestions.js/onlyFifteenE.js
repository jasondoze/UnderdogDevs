const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

// What are all of the words that have only “E”s for vowels and are at least 15 letters long?

function onlyFifteenE(text) {
  text.forEach((word) => {
    if (
      !word.includes("a") &&
      !word.includes("i") &&
      !word.includes("o") &&
      !word.includes("u") &&
      word.length >= 15
    ) {
      console.log(word);
    }
  });
}
onlyFifteenE(words);
