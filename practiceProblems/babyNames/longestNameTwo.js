const fs = require('fs');
const text = fs.readFileSync('baby_names_2020_short.txt');
const textByLine = text.toString().toLowerCase().split('\n');

// What are the longest baby names in the top 40 baby names for 2020?
// Make sure you can handle if there’s a tie.

function longestBabyName(babyNames) {
  let longestNames = '';
  let longestNamesLength = 0;
  for (let i in babyNames) {
    if (babyNames[i].length > longestNamesLength) {
      longestNames = babyNames[i];
      longestNamesLength = babyNames[i].length;
      // console.log(longestNames);
    }
  }
  return longestNames;
}
console.log(longestBabyName(textByLine));
