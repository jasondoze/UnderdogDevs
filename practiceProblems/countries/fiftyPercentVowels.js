const assert = require("assert");
const fs = require("fs");
const text = fs.readFileSync("countries.txt");
const textByLine = text.toString().toLowerCase().split("\n");

// What country names are > 50% vowels?
function vowel(input) {
  // create an empty arr varible
  let countries = [];
  // iterate throught the array
  for (let i = 0; i < input.length; i++) {
    let count = 0;
    for (let j = 0; j < input[i].length; j++) {
      if (
        input[i].charAt(j).includes("a") ||
        input[i].charAt(j).includes("e") ||
        input[i].charAt(j).includes("i") ||
        input[i].charAt(j).includes("o") ||
        input[i].charAt(j).includes("u")
      ) {
        count++;
      }
    }
    if (count > input[i].length / 2) {
      // if the count is greater than half the length of the string, push them to the arr
      countries.push(input[i]);
    }
  }
  // return the countries array
  return countries;
}
console.log(vowel(textByLine));
