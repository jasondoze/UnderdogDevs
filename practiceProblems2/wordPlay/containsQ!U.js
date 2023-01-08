const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words containing a Q but not a U?
const contains = (array) => {
  return array.filter((word) => word.includes('q') && !word.includes('u'));
};
console.log(contains(words));
