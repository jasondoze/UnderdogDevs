const words = require('fs')
  .readFileSync('sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words containing an X and a Y and a Z?

const containsXY = (array) => {
  array.filter((word) => {
    if (word.includes('x') && word.includes('y') && word.includes('z')) {
      console.log(word);
    }
  });
};
containsXY(words)