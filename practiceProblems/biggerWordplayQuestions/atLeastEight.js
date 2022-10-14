// const fs = require('fs');
// const text = fs.readFileSync('sowpods.txt');
// const words = text.toString().toLowerCase().split('\n');

// /*
// What are all of the words that are at least 8 letters long and use 3
// or fewer different letters? For example, “REFERRER” is an answer to this question,
// because it uses only 3 different letters: R, E, and F.
// */

// console.log(words);

let atLeastEight = (wordArray) => {
  let countObj = {};
 
  for (let i = 0; i < wordArray.length; i++) {
    let splitter = wordArray[i].split('');
    for (let char of splitter) {
      if (!countObj[char]) {
        countObj[char] = 1;
      }
    }
  }
  return countObj;
};

console.log(atLeastEight(['blunnnnkerrrrs', 'monkkkkkeeeessss']));
