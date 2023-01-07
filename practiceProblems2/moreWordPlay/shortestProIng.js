const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.

const shortestProIng = (array) => {
  let hasChars = array.filter(
    (element) => element.startsWith('pro') && element.endsWith('ing')
  );
  let wordLength = hasChars.map((element) => element.length);

  let minLength = Math.min(...wordLength);

  return hasChars.filter((element) => element.length === minLength);
};
console.log(shortestProIng(words));
console.log(performance.now());
123.762285977602

const shortest = (array) => {
  let proings = [];
  for (const word of array) {
    if (word.startsWith('pro') && word.endsWith('ing')) {
      proings.push(word);
    }
  }
  let wordLength = proings.map((element) => element.length);

  let minLength = Math.min(...wordLength);

  return proings.filter((element) => element.length === minLength);
};
console.log(shortest(words));
console.log(performance.now());
163.41172897815704
