// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.

let print2d = (arr) => {
  for (const row of arr) {
    for (const char of row) {
      console.log(char);
    }
  }
};

let array1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i'],
];
print2d(array1);
// prints
//  a
//  b
//  c
//  d
//  e
//  f
//  g
//  h
//  i

let array2 = [[9, 3, 4], [11], [42, 100]];
print2d(array2);
// prints
//  9
//  3
//  4
//  11
//  42
//  100

console.log('==============================================');

// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.
let makeMatrix = (m, n, value) => {
  let matrix = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(value);
    }
    matrix.push(row);
  }
  return matrix;
};
console.log(makeMatrix(3, 5, null));
// [
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ]
// ]

console.log(makeMatrix(4, 2, 'x'));
// [
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ]
// ]

console.log(makeMatrix(2, 2, 0));
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]

console.log('==============================================');
// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

let totalProduct = (arrayz) => {
  let product = 1;
  for (let i = 0; i < arrayz.length; i++) {
    for (let j = 0; j < arrayz[i].length; j++) {
      // console.log(arrayz[i][j]);
      product *= arrayz[i][j];
    }
  }
  return product;
};

let ar1 = [
  [3, 5, 2],
  [6, 2],
];
console.log(totalProduct(ar1)); // 360

let ar2 = [
  [4, 6],
  [2, 3],
  [1, 2],
];
console.log(totalProduct(ar2)); // 288

console.log('==============================================');
// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.

let twoSumPairs = (numbers, target) => {
  let pairs = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let firstNum = numbers[i];
      let secondNum = numbers[j];
      if (firstNum + secondNum === target) {
        let pair = [firstNum, secondNum];
        pairs.push(pair);
      }
    }
  }
  return pairs;
};

console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]
console.log(twoSumPairs([10, 7, 4, 5, 2], 12)); // [ [10, 2], [7, 5] ]
console.log(twoSumPairs([3, 9, 8], 11)); // [ [3, 8] ]
console.log(twoSumPairs([3, 9, 8], 10)); // [ ]

console.log('==============================================');
// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the
// same length.

let zipper = (a, b) => {
  let resulta = [];
  for (let i = 0; i < a.length; i++) {
    let chars = a[i];
    let numberz = b[i];
    let pairz = [chars, numberz];
    resulta.push(pairz);
  }
  return resulta;
};

let a1 = ['a', 'b', 'c', 'd'];
let a2 = [-1, -2, -3, -4];
console.log(zipper(a1, a2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let a3 = ['whisper', 'talk', 'shout'];
let a4 = ['quiet', 'normal', 'loud'];
console.log(zipper(a3, a4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]


console.log('==============================================');