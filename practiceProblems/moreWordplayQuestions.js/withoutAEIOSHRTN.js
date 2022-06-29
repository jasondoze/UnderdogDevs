const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLocaleLowerCase().split("\n");

/*What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated.*/

// create a result arr variable
// create an array of the 'made without' letters
// iterate through the all the words in the text file
// create a variable for the iteration word[i]
// create a split variable to split the previous iteration word variable
// write a conditional that will determine if the split variable includes the made without letters
// if it does not contain those letters, push the words with the letters to the result arr var
// return the result arr var
function withLetters(allWords) {
  const result = [];
  const withoutLetters = ["a", "e", "i", "o", "s", "h", "r", "t", "n"];
  for (let i = 0; i < allWords.length; i++) {
    let word = allWords[i];
    let splitWord = word.split("");
    for (let j = 0; j < withoutLetters.length; j++) {
      let noLetter = withoutLetters[j];
      if (!splitWord.includes(noLetter) && j === withoutLetters.length - 1) {
        result.push(word);
      } else if (splitWord.includes(noLetter)) {
        break;
      }
    }
  }
  return result;
}
   
console.log(withLetters(words));