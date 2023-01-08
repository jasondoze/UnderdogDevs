const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What is the shortest word that contains all 5 vowels?

const contains = (array) => {
  let filtered = array.filter((element) =>
    element.match(/(?=.*a)(?=.*e)(?=.*i)(?=.*o)(?=.*u)[a-z]*/g)
  );
  return filtered.reduce((a, b) => (a.length <= b.length ? a : b));
};
console.log(contains(words));
