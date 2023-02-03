const words = require('fs').readFileSync('../sowpods.txt').toString().toLowerCase().split('\n');

// Write a function that takes a string `word` as an argument and returns a count of all of the “A”s in that string.

const aCounter = (word) => {
  let obj = {};
  for (const wordz of word) {
    let count = 0;
    for (const letter of wordz) {
      if (letter.includes('a')) {
        count++;
      }
    }
    if (count > 0) {
      obj[wordz] = count;
    }
  }
  return obj;
};
console.log(aCounter(words));

const countA = (array) => {
  // reduce the array into an empty obj called wordObj and iterate through rows
  const wordsObject = array.reduce((wordObj, row) => {
    // split the rows of words into chars and if any letter is an a, its assigned to the count variables length
    const count = row.split('').filter((letter) => letter === 'a').length;
    // if the count is greater than zero
    if (count > 0) {
      // wordObject at word = count
      wordObj[row] = count;
    }
    return wordObj;
  }, {});
  return wordsObject;
};
console.log(countA(words));
