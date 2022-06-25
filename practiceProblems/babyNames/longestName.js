const fs = require("fs");
const text = fs.readFileSync("baby_names_2020_short.txt");
const textByLine = text.toString().toLowerCase().split("\n");

// What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.
function longestBabyName(names) {
  let longestName = "";
  let longestNameLength = 0;
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > longestNameLength) {
      longestName = names[i];
      longestNameLength = names[i].length;
    }
  }
  return longestName;
}
console.log(longestBabyName(textByLine));
