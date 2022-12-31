const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// Which of the letters Q, X, and Z is the least common?

// find the words with q, x, and z
// put each in an array
// get the length of the arrays
// find the shorts length of the arrays

const leastCommon = (array) => {
  let q = [];
  let x = [];
  let y = [];
  for (const word of array) {
    if (word.includes('q')) {
      q.push(word);
    }
    if (word.includes('x')) {
      x.push(word);
    }
    if (word.includes('y')) {
      y.push(word);
    }
  }
  return Math.min(q.length, x.length, y.length);
};
console.log(leastCommon(words));
