const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that have a B and an X and are less than 5 letters long?


const contains2 = (array) => {
  return array.filter(
    (word) => word.includes('b') && word.includes('x') && word.length < 5
  );
};
console.log(contains2(words));
console.log(Math.round(performance.now())); // [ 'box', 'boxy', 'brux', 'ibex' ]
// 127.25416004657745
