const words = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()

  .split('\n');

// Write a function that takes a string `phrase` and returns a dictionary that contains the counts of how many times every character appears in `phrase`.
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
const countPrase = (array, alphabet) => {
// Declare an empty object to store the counts for each word
let counts = {};
// Iterate over each word in the array
for (const word of array) {
  // Initialize a new property in the counts object for the current word with an empty object as the value
  counts[word] = {};
  // Iterate over each letter in the current word
  for (const letter of word) {
    // Check if the letter is included in the alphabet array
    if (alphabet.includes(letter)) {
      // If the letter is in the alphabet array, increment the count for that letter
      // in the counts object for the current word
      if (counts[word][letter]) {
        counts[word][letter]++;
      } else {
        // If the letter has not been encountered before, add a new property to the counts object for the current word with a count of 1
        counts[word][letter] = 1;
      }
    }
  }
}
return counts;
};
