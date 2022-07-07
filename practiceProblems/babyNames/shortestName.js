const assert = require("assert");
const fs = require("fs");
const text = fs.readFileSync("baby_names_2020_short.txt");
const textByLine = text.toString().toLowerCase().split("\n");

function shortestBabyName(names) {
  let shortestName = "";
  let shortestNameLength = Infinity;
  for (let i = 0; i < names.length; i++) {
    if (names[i].length < shortestNameLength) {
      shortestName = names[i];
      shortestNameLength = names[i].length;
    }
  }
  return shortestName;
}
console.log(shortestBabyName(textByLine));
