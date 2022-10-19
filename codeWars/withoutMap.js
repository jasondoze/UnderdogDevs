/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

const maps = (x) => {
  return x.map((value) => value * 2);
};

console.log(maps([1, 2, 3]), '[2, 4, 6]');
console.log(maps([4, 1, 1, 1, 4]), '[8, 2, 2, 2, 8]');
console.log(maps([2, 2, 2, 2, 2, 2]), '[4, 4, 4, 4, 4, 4]');
