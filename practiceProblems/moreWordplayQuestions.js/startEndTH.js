const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

// What are all of the words that both start with a “TH” and end with a “TH”?

function beginEndTh(allWords) {
  const bothEnds = [];
  for (let i = 0; i < allWords.length; i++) {
    if (allWords[i].startsWith("th") && allWords[i].endsWith("th")) {
      bothEnds.push(allWords[i]);
    }
  }
  return bothEnds;
}

console.log(beginEndTh(words));
