const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words containing an X and a Y and a Z?

const containsXYZ = (array) => {
  array.filter((word) => {
    if (word.match(/(?=.*x)(?=.*y)(?=.*z)/g)) {
      console.log(word);
    }
  });
};
containsXYZ(words);
