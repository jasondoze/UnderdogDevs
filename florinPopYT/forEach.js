const numbers = [1, 2, 3, 4, 5];

let numArr = numbers.forEach((item, index, array) => {
  console.log(`${item} ${index} ${array}`);
});

console.log(numArr);

// add sum with for each
const nums = [1, 2, 3, 4, 5];
let sum = 0;
let sumNums = nums.forEach((item) => {
  sum += item;
});

console.log(sum);

// check amount of times letters appear in an array
const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

let count = {};

let countLetters = letters.forEach((item) => {
  if (!count[item]) {
    count[item] = 1;
  } else {
    count[item]++;
  }
});
console.log(count);
