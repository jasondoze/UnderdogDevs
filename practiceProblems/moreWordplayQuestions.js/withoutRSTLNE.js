const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const list = text.toString().toLowerCase().split("\n");

/*What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated.*/

// create a restlne array var
// create a result var
// iterate over all Words in the list
// create an iterator var
// if all words does not include restlne
// push those words to the result
// return the result

function withoutRSTLNE(allWords) {
  const result = [];
  const rstlne = ["r", "s", "t", "l", "n", "e"];
  for (let i = 0; i < allWords.length; i++) {
    let words = allWords[i];
    let splitWords = words.split("");
    // check if the split words do not include rstlne
    if (splitWords.every((letter) => !rstlne.includes(letter))) {
      result.push(words);
    }
  }
  return result;
}

console.log(withoutRSTLNE(list));
