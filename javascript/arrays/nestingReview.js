// Write a function `removeDupes` that accepts an array as an argument. The function should return a
// new array where each element only appears once.

let removeDupes = (array) => {
  let noDupes = [];
  for (let i = 0; i < array.length; i++) {
    if (!noDupes.includes(array[i])) {
      noDupes.push(array[i]);
    }
  }
  return noDupes;
};

console.log(removeDupes(['x', 'y', 'y', 'x', 'z'])); // ['x', 'y', 'z']
console.log(removeDupes([false, false, true, false])); // [false, true]
console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7])); // [42, 5, 7, 3]

console.log('======================================');
// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.

// let removeVowels = (str) => {
//   let newString = '';
//   let vowels = 'aeiou';
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//       newString += str[i];
//     }
//   }
//   return newString;
// };

// console.log(removeVowels('jello')); // jll
// console.log(removeVowels('sensitivity')); // snstvty
// console.log(removeVowels('cellar door')); // cllr dr

console.log('======================================');
// Write a function `spam` that accepts a 2D array as an argument. The array contains pairs as elements.
// The first element of every pair is a number and the second element is a word. The function should
// return a string containing the words repeated the specified number of times. See the examples.

let spam = (array) => {
  let resArr = [];
  for (let i = 0; i < array.length; i++) {
    let pair = array[i];
    let word = pair[0];
    let number = pair[1];
    for (let j = 0; j < number; j++) {
      resArr.push(word);
    }
  }
  return resArr.join(' ');
};

let array1 = [
  ['hi', 3],
  ['bye', 2],
];
console.log(spam(array1)); // 'hi hi hi bye bye'

// let array2 = [
//   ['cat', 1],
//   ['dog', 2],
//   ['bird', 4],
// ];
// console.log(spam(array2)); // 'cat dog dog bird bird bird bird'

console.log('======================================');
// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

let removeFirstVowel = (string) => {
  let vowels = 'aeiou';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    // check whether or not there are any vowels in the string that has been entered.
    if (vowels.includes(char)) {
      // If there are, then it will return the string with all of its vowels removed
      // from it and start at 0 again.
      return string.slice(0, i) + string.slice(i + 1);
    }
  }
  return string;
};

console.log(removeFirstVowel('volcano')); // 'vlcano'
console.log(removeFirstVowel('celery')); // 'clery'
console.log(removeFirstVowel('juice')); // 'jice'
console.log(removeFirstVowel('try')); // 'jice'

console.log('======================================');
// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

let removeVowels = (str) => {
  let newString = '';
  let vowels = 'aeiou';
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newString += str[i];
    }
  }
  return newString;
};

let shortenLongWords = (stringle) => {
  let newWords = [];
  let words = stringle.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 4) {
      let noVowels = removeVowels(word);
      newWords.push(noVowels);
    } else {
      newWords.push(word);
    }
  }
  return newWords.join(' ');
};

console.log(shortenLongWords('they are very noble people')); // 'they are very nbl ppl'
console.log(shortenLongWords('stick with it')); // 'stck with it'
console.log(shortenLongWords('ballerina, you must have seen her')); // 'bllrna, you must have seen her'
