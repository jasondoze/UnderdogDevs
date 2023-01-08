const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words containing an X and a Y and a Z?

const containsXYZv = (array) => {
  return array.filter((word) => word.match(/(?=.*x)(?=.*y)(?=.*z)/g));
};
console.log(containsXYZv(words));
