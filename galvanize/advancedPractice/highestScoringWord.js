/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function highestScoringWord(string) {
  // split the string of words
  // map converts each word into an array of individual characters
  /*
  [
  [ 'm', 'a', 'n' ],
  [ 'i' ],
  [ 'n', 'e', 'e', 'd' ],
  [ 'a' ],
  [ 't', 'a', 'x', 'i' ],
  [ 'h', 'o', 'l', 'm', 'e', 's' ]
  ]
  */
  // For each character in the word, the .reduce() method adds the character's ASCII code value (which is determined using the .charCodeAt() method) minus 96 to a running total.
  let words = string
    .split(' ')
    .map((string) =>
      [...string].reduce(
        (previous, current) => previous + current.charCodeAt(0) - 96,
        0
      )
    );

  return string.split(' ')[words.indexOf(Math.max(...words))];
}
console.log(highestScoringWord('man i need a taxi holmes'));
