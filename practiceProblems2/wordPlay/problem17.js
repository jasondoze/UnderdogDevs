const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .split('\n');

// What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

// split the words
// cycle through letters
// check if the previous letter isnt the next letter
const alphaArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
/*
The Array.prototype.some() method is used to check if at least one element in the array satisfies the provided testing function. In this case, the testing function is element => element.includes(letter + letter), which checks if the element includes the letter followed by the same letter (e.g. 'aa').
If at least one element in the array includes the letter followed by the same letter, then the testing function will return true and the some() method will return true.
The if statement then checks if the some() method returns false by using the ! operator to negate the result. If the some() method returns false, then the if statement will evaluate to true and the code within the if block will be executed.
If the some() method returns true, then the if statement will evaluate to false and the code within the if block will not be executed.
*/
function findNonConsecutiveLetters(array, alphabet) {
  let nonConsecutiveLetters = [];
  for (const letter of alphabet) {
    if (!array.some(element => element.includes(letter + letter))) {
      nonConsecutiveLetters.push(letter);
    }
  }
  return nonConsecutiveLetters;
}

console.log(findNonConsecutiveLetters(words, alphaArray));

