const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// Which of the letters Q, X, and Z is the least common?

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
console.log(performance.now());  // 157.5906000137329



const leastCommon2 = (array) => {
  // Define a function named `countLetters` that takes in a `letter`
  const countLetters = (letter) =>
    // Return the number of elements in `array` that include `letter`
    array.filter((word) => word.includes(letter)).length;

  // Return the minimum number of elements in `array` that include either 'q', 'x', or 'y'
  return Math.min(countLetters('q'), countLetters('x'), countLetters('y'));
};

// Log the result of calling `leastCommon2` with the `words` array
console.log(leastCommon2(words));
console.log(Math.round(performance.now()));  // 139

/*
In this example, the leastCommon2 function is called with the words array as an argument. The leastCommon2 function defines the countLetters function, which takes in a letter and returns the number of elements in the array that include the letter. The leastCommon2 function then returns the minimum number of elements in the array that include either 'q', 'x', or 'y'. In this case, none of the elements in the words array include 'q', 'x', or 'y', so the output is 0.
*/