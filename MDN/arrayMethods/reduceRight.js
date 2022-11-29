/*
Array.prototype.reduceRight()
The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
*/

const array = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array.reduceRight((accumulator, current) =>
  accumulator.concat(current)
);
console.log(result);
// [ 4, 5, 2, 3, 0, 1 ]

console.log('---------------------');

const arr = [0, 1, 2, 3, 4];
const reducer = arr.reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue
);
console.log(reducer);
// 10

console.log('---------------------');

const arr1 = [0, 1, 2, 3, 4];
const reduceR = arr1.reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  10
);
console.log(reduceR);
// 20

console.log('---------------------');

const arr2 = [0, 1, 2, 3, 4];

const sum = arr2.reduceRight((a, b) => a + b);
const sum2 = arr2.reduceRight((a, b) => a + b, 10);

console.log(sum);
// 10
console.log(sum2);
// 20
