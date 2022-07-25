const fs = require('fs');
const text = fs.readFileSync('sowpods.txt');
const sowpods = text.toString().toLowerCase().split('\n');
const assert = require('assert');

function longestRSTLNE(word) {
  let filtered = [];
  const letters = ['r', 's', 't', 'l', 'n', 'e'];
  for (let i = 0; i < word.length; i++) {
    let currWord = word[i];
    let wordArray = currWord.split('');
    // for every letter in the current word, is that included in letters
    if (wordArray.every((letter) => letters.includes(letter))) {
      filtered.push(currWord);
    }
  }
  const longest = filtered.reduce(
    (savedText, text) => (text.length > savedText.length ? text : savedText),
    ''
  );
  return longest;
}
console.log(longestRSTLNE(sowpods));

/*
The code starts by creating an empty string and then iterating through each item 
in the filtered list, adding it to the end of the new string.
It then returns that new string as its result.
The first line creates an empty string called "".
Then, for each item in filtered, it appends that item to "" 
(the empty string) and returns "" as its result.
*/
