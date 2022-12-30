const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words containing UU?

const doubleU = (array) => {
  array.filter((word) => {
    if (word.includes('uu')) {
      console.log(word);
    }
  });
};
doubleU(words);
