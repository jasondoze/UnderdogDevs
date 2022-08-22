// Write a function `total` that accepts an array of numbers as an argument. The function should return
// the total sum of all elements of the array.
let total = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(total([3, 2, 8])); // 13
console.log(total([-5, 7, 4, 6])); // 12
console.log(total([7])); // 7
console.log(total([])); // 0

// Write a function `stayPositive` that accepts an array of numbers as an argument. The function should
// return an array containing only the positive numbers.
console.log('break');
let positive = [];
let stayPositive = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive.push(array[i]);
    }
  }
  return positive;
};
console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
// console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
// console.log(stayPositive([-11, -30])); // []

// Write a function `bleepVowels` that accepts a string as an argument. The function should return
// a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.

let bleepVowels = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let output = '';
  for (let i = 0; i < str.length; i++) {
    // if the char is a vowel
    if (vowels.indexOf(str[i]) > -1) {
      output += '*';
    } else {
      // else the char is not a vowel
      output += str[i];
    }
  }
  return output;
};

console.log(bleepVowels('skateboard')); // 'sk*t*b**rd'
console.log(bleepVowels('slipper')); // 'sl*pp*r'
console.log(bleepVowels('range')); // 'r*ng*'
console.log(bleepVowels('brisk morning')); // 'br*sk m*rn*ng'
console.log(bleepVowels('mrngpsh')); // 'br*sk m*rn*ng'

// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

let filterLongWords = (arr1) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length < 5) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};

console.log(filterLongWords(['kale', 'cat', 'retro', 'axe', 'heirloom']));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(['disrupt', 'pour', 'trade', 'pic']));
// ['pour', 'pic']

// Write a function `numOdds` that accepts an array of numbers as an argument. The function should
// return a number representing the count of odd elements in the array.

let numOdds = (array1) => {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 1) {
      count++;
    }
  }
  return count;
};

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0

// Write a function `stringsToLengths` that accepts an array of strings as an argument. The function
// should return a new array containing the lengths of the elements of the original array.

let stringsToLengths = (aRray) => {
  let lengths = [];
  for (let i = 0; i < aRray.length; i++) {
    lengths.push(aRray[i].length);
  }
  return lengths;
};

console.log(stringsToLengths(['belly', 'echo', 'irony', 'pickled']));
// [5, 4, 5, 7]

console.log(stringsToLengths(['on', 'off', 'handmade']));
// [2, 3, 8]

// Write a function `divisors` that accepts a number as an argument. The function should return an
// array containing all positive numbers that can divide into the argument.
console.log('break');
let divisors = (num) => {
  let divisible = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisible.push(i);
    }
  }
  return divisible;
};

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
