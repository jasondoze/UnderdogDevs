const babyNames2020 = require('fs')
  .readFileSync('../baby_names_2020_short.txt')
  .toString()
  .toLowerCase()
  .split('\n');

const scrabbleWords = require('fs')
  .readFileSync('../sowpods.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.

// Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?

const babyScrabble = (babyNames, scrabble) => {
  for (const names of babyNames) {
    for (const words of scrabble) {
      if (names.split('').reverse().join('') === words) {
        console.log(words);
      }
    }
  }
};

babyScrabble(babyNames2020, scrabbleWords);
console.log(performance.now());
2947.3370970487595

const babyScrabble2 = (babyNames, scrabble) => {
  let allWords = new Set(scrabble);
  for (const names of babyNames) {
    let reversed = names.split('').reverse().join('');
    if (allWords.has(reversed)) {
      console.log(names);
    }
  }
};
babyScrabble2(babyNames2020, scrabbleWords);
console.log(performance.now());
// 227.56904995441437

/* 
The time difference between the two functions is because the second function has a more efficient algorithm.

In the first function, you are looping through each name in the babyNames array, and then looping through each word in the scrabble array to check if the reversed name is equal to the word. This means that the time complexity of the first function is O(n^2), where n is the length of the babyNames array.

In the second function, you are still looping through each name in the babyNames array, but you are using a Set data structure to store all of the words in the scrabble array. The Set has a has() method that allows you to check if an element is in the set in constant time, which is much faster than looping through the array. This means that the time complexity of the second function is O(n), where n is the length of the babyNames array.

Overall, the second function is faster because it has a lower time complexity.
*/