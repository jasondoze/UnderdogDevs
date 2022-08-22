// let array = [
//   ['a', 'b'],
//   ['c', 'd', 'e'],
//   ['f', 'g', 'h'],
// ];

// // console.log(array);
// let subArray = array[1];
// // console.log(subArray[2]);

// let string = '';

// for (let i = 0; i < array.length; i++) {
//   let subarray = array[i];
//   for (let j = 0; j < subarray.length; j++) {
//     string += subarray[j];
//     // console.log(array[i][j]);
//   }
// }

// console.log(string);
// console.log('=======================================================');

// // Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// // should print all inner elements of the array.

// let array1 = [
//   ['a', 'b', 'c', 'd'],
//   ['e', 'f'],
//   ['g', 'h', 'i'],
// ];

// let print2d = (arr) => {
//   for (const row of arr) {
//     for (const char of row) {
//       console.log(char);
//     }
//   }
// };
// print2d(array1);
// // prints
// //  a
// //  b
// //  c
// //  d
// //  e
// //  f
// //  g
// //  h
// //  i

// let array2 = [[9, 3, 4], [11], [42, 100]];
// print2d(array2);
// // prints
// //  9
// //  3
// //  4
// //  11
// //  42
// //  100

// console.log('=======================================================');
// // Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// // a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.

// let makeMatrix = (height, width, value) => {
//   let matrix = [];
//   for (let i = 0; i < height; i++) {
//     let row = [];
//     for (let j = 0; j < width; j++) {
//       row.push(value);
//     }
//     matrix.push(row);
//   }
//   return matrix;
// };

// console.log(makeMatrix(3, 5, null));
// // [
// //   [ null, null, null, null, null ],
// //   [ null, null, null, null, null ],
// //   [ null, null, null, null, null ]
// // ]

// console.log(makeMatrix(4, 2, 'x'));
// // [
// //   [ 'x', 'x' ],
// //   [ 'x', 'x' ],
// //   [ 'x', 'x' ],
// //   [ 'x', 'x' ]
// // ]

// console.log(makeMatrix(2, 2, 0));
// // [
// //   [ 0, 0 ],
// //   [ 0, 0 ]
// // ]

// // Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// // the total product of all numbers in the array.
console.log('=======================================================');

let totalProduct = (arrz) => {
  let product = 1;
  for (const rowz of arrz) {
    for (const numz of rowz) {
      // console.log(numz, 'num');
      product *= numz;
    }
  }
  return product;
};

let arr1 = [
  [3, 5, 2],
  [6, 2],
];
console.log(totalProduct(arr1)); // 360

let arr2 = [
  [4, 6],
  [2, 3],
  [1, 2],
];
console.log(totalProduct(arr2)); // 288

console.log('=======================================================');
// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.

let twoSumPairs = (numbers, target) => {
  let pairs = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        let pair = [numbers[i], numbers[j]];
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

console.log('=======================================================');

// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the
// same length.

let zipper = (ar1, ar2) => {
  let result = [];
  for (let i = 0; i < ar1.length; i++) {
    let element1 = ar1[i];
    let element2 = ar2[i];
    let pair = [element1, element2];
    result.push(pair);
  }
  return result;
};

let array1 = ['a', 'b', 'c', 'd'];
let array2 = [-1, -2, -3, -4];
console.log(zipper(array1, array2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

// let array3 = ['whisper', 'talk', 'shout'];
// let array4 = ['quiet', 'normal', 'loud'];
// console.log(zipper(array3, array4));
// // [
// //   ['whisper', 'quiet'],
// //   ['talk', 'normal'],
// //   ['shout', 'loud'],
// // ]


console.log('=======================================================');