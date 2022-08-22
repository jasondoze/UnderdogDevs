// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

let makeAcronym = (str) => {
  let returnString = '';
  let split = str.split(' ');
  for (let i = 0; i < split.length; i++) {
    let first = split[i][0].toUpperCase();
    returnString += first;
  }
  return returnString;
};

console.log(makeAcronym('New York')); // NY
console.log(makeAcronym('same stuff different day')); // SSDD
console.log(makeAcronym('Laugh out loud')); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS

// Write a function `reverseArray` that accepts an array as an argument. The function should return a
// array containing the elements of the original array in reverse order.
console.log('-----------------------------');

let reverseArray = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverseArray(['zero', 'one', 'two', 'three'])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]
console.log('-----------------------------');
let smallestNum = (nums) => {
  if (nums.length === 0) {
    return null;
  }
  let smallestInt = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let myNum = nums[i];
    // if the num Im iterating through is smaller than the smallest I have stored
    // then replace the smallest with that num
    if (myNum < smallestInt) {
      smallestInt = myNum;
    }
  }
  return smallestInt;
};

console.log(smallestNum([5, 6, 7, 7, 8, 9]));
console.log(smallestNum([]));

// Write a function `yourAverageFunction` that accepts an array of numbers as an argument. The
// function should return the average of all elements of the array. If the input array is empty,
// then the function should return null.
console.log('-----------------------------');
let yourAverageFunction = (arrray) => {
  if (arrray.length === 0) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < arrray.length; i++) {
    sum += arrray[i];
  }
  return sum / arrray.length;
};
console.log(yourAverageFunction([5, 2, 7, 24])); // 9.5
console.log(yourAverageFunction([100, 6])); // 53
console.log(yourAverageFunction([31, 32, 40, 12, 33])); // 29.6
console.log(yourAverageFunction([])); // null

console.log('-----------------------------');
// Write a function `chooseDivisibles(numbers, target)` that accepts an array of numbers and a
// target number as arguments. The function should return an array containing elements of the original
// array that are divisible by the target.

let chooseDivisibles = (numbers, target) => {
  let divisibility = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % target === 0) {
      divisibility.push(numbers[i]);
    }
  }
  return divisibility;
};

console.log(chooseDivisibles([40, 7, 22, 20, 24], 4)); // [40, 20, 24]
console.log(chooseDivisibles([9, 33, 8, 17], 3)); // [9, 33]
console.log(chooseDivisibles([4, 25, 1000], 10)); // [1000]

console.log('-----------------------------');
// Write a function `maximum` that accepts an array of numbers as an argument. The function should
// return the largest number of the array. If the array is empty, then the function should return null.

let maximum = (arraz) => {
  if (arraz.length === 0) {
    return null;
  }
  let longest = arraz[0];
  for (let i = 0; i < arraz.length; i++) {
    let num = arraz[i];
    if (num > longest) {
      longest = num;
    }
  }
  return longest;
};

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null

console.log('-----------------------------');
// Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of
// `targetWords`. The function should return a count of the number of words of the sentence that are
// in `targetWords`.

let wordCount = (sentence, targetWords) => {
  let words = sentence.split(' ');
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (targetWords.includes(word)) {
      count++;
    }
  }
  return count;
};

console.log(wordCount('open the window please', ['please', 'open', 'sorry'])); // 2
console.log(wordCount('drive to the cinema', ['the', 'driver'])); // 1
console.log(wordCount('can I have that can', ['can', 'I'])); // 3

console.log('-----------------------------');
// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later
// in the sentence.

let lengthiestWord = (strings) => {
  let splitter = strings.split(' ');
  let longest = splitter[0];
  for (let i = 1; i < splitter.length; i++) {
    if (splitter[i].length >= longest.length) {
      longest = splitter[i];
    }
  }
  return longest;
};

console.log(lengthiestWord('I am pretty hungry')); // 'hungry'
console.log(lengthiestWord('we should think outside of the box')); // 'outside'
console.log(lengthiestWord('down the rabbit hole')); // 'rabbit'
console.log(lengthiestWord('simmer down')); // 'simmer'

console.log('-----------------------------');
// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

let alternatingCaps = (sentenceString) => {
  let newbie = [];
  let splitty = sentenceString.split(' ');
  for (let i = 0; i < splitty.length; i++) {
    if (i % 2 === 0) {
      newbie.push(splitty[i].toLowerCase());
    } else {
      newbie.push(splitty[i].toUpperCase());
    }
  }
  return newbie.join(' ');
};

console.log(alternatingCaps('take them to school')); // 'take THEM to SCHOOL'
console.log(alternatingCaps('What did ThEy EAT before?')); // 'what DID they EAT before?'

console.log('-----------------------------');
// Write a function `numberRange(min, max, step)` that accepts three numbers as arguments, `min`,
// `max`, and `step`. The function should return all numbers between `min` and `max` at `step` intervals.
// `min` and `max` are inclusive.

let numberRange = (min, max, step) => {
  let numArr = [];
  for (let i = min; i <= max; i += step) {
    numArr.push(i);
  }
  return numArr;
};

console.log(numberRange(10, 40, 5)); // [10, 15, 20, 25, 30, 35, 40]
console.log(numberRange(14, 24, 3)); // [14, 17, 20, 23]
console.log(numberRange(8, 35, 6)); // [8, 14, 20, 26, 32]

console.log('-----------------------------');
// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

let removeShortWords = (sent) => {
  let newSent = [];
  let splite = sent.split(' ');
  for (let i = 0; i < splite.length; i++) {
    if (splite[i].length >= 4) {
      newSent.push(splite[i]);
    }
  }
  return newSent.join(' ');
};

console.log(removeShortWords('knock on the door will you')); // 'knock door will'
console.log(removeShortWords('a terrible plan')); // 'terrible plan'
console.log(removeShortWords('run faster that way')); // 'faster that'

console.log('-----------------------------');
// Write a function `commonElements` that accepts two arrays as arguments. The function should return
// a new array containing the elements that are found in both of the input arrays. The order of
// the elements in the output array doesn't matter as long as the function returns the correct elements.

let commonElements = (arr1, arr2) => {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      res.push(arr1[i]);
    }
  }
  return res;
};

let arr1 = ['a', 'c', 'd', 'b'];
let arr2 = ['b', 'a', 'y'];
console.log(commonElements(arr1, arr2)); // ['a', 'b']

let arr3 = [4, 7];
let arr4 = [32, 7, 1, 4];
console.log(commonElements(arr3, arr4)); // [4, 7]
