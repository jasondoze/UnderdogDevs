const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

// What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long ?
function startEndEleven(allWords) {
  allWords.forEach((word) => {
    if (
      word.startsWith("pro") &&
      word.endsWith("ing") &&
      word.length === 11
    ) {
      console.log(word);
    }
  });
}
startEndEleven(words);