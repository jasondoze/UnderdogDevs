/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

const positiveSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};
console.log(positiveSum([1, 2, 3, 4, 5]), '15');
console.log(positiveSum([1, -2, 3, 4, 5]), '13');
console.log(positiveSum([]), '0');
console.log(positiveSum([-1, -2, -3, -4, -5]), '0');
console.log(positiveSum([-1, 2, 3, 4, -5]), '9');

// using filter and reduce
const positiveSum2 = (arr) => {
  let sum = arr
    .filter((x) => x > 0)
    .reduce((acc, curr) => acc + curr, 0);
  return sum;
};
console.log(positiveSum2([1, 2, 3, 4, 5]), '15');
console.log(positiveSum2([1, -2, 3, 4, 5]), '13');
console.log(positiveSum2([]), '0');
console.log(positiveSum2([-1, -2, -3, -4, -5]), '0');
console.log(positiveSum2([-1, 2, 3, 4, -5]), '9');
