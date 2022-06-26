const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

// What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.

function shortStartStop(allWords) {
  const proIng = [];
  let shortest = [0];
  let longest = Infinity;
  for (let i = 0; i < allWords.length; i++) {
    if (allWords[i].startsWith("pro") && allWords[i].endsWith("ing")) {
      proIng.push(allWords[i]);
    }
  }
  for (let j = 0; j < proIng.length; j++) {
    if (proIng.length > shortest.length) {
      shortest = proIng[j];
    }
  }
  return shortest;
}
console.log(shortStartStop(words));
