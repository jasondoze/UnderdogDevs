const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words containing UU?

const doubleU = (array) => {
  return array.filter((word) => word.includes('uu'));
};
console.log(doubleU(words));
