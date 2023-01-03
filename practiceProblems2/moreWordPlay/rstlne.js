const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated.

const rstlne = (array) => {
  return array.filter((element) =>
    element.match(/(?=.*r)(?=.*s)(?=.*t)(?=.*l)(?=.*n)(?=.*e)[a-z]*/g)
  );
};
console.log(rstlne(words));

