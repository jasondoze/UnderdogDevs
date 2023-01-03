const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the words that have only “U”s for vowels?

const onlyU = (array) => {
  let pattern = /^[^aeiou]*u[^aeiou]*$/g;
  for (const word of array) {
    if (word.match(pattern)) {
      console.log(word);
    }
  }
};
onlyU(words);


