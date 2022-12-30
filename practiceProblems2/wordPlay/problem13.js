const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What is the shortest word that contains all 5 vowels?

const contains = (array) => {
  /* (?=.*a): This is a positive lookahead that checks for the presence of the letter a anywhere within the word. The .* before the a is a wildcard that matches any number of characters (including zero). [a-z]*: This character class matches any number of lowercase letters (including zero). */
  let shortestWord = '';
  let vowels = /(?=.*a)(?=.*e)(?=.*i)(?=.*o)(?=.*u)[a-z]*/g;
  for (const word of array) {
    if (word.match(vowels)) {
      // The shortestWord === "" condition is necessary to ensure that the if statement is only executed on the first iteration of the loop, when shortestWord is still an empty string. On subsequent iterations of the loop, the if statement will only be executed if the current word is shorter than the current value of shortestWord
      if (shortestWord === "" || word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
  }
  return shortestWord;
};
console.log(contains(words));

