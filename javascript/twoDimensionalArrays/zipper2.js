// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the
// same length.

let zipper = (array1, array2) => {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    let first = array1[i];
    let second = array2[i];
    let pair = [first, second];
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

let array3 = ['whisper', 'talk', 'shout'];
let array4 = ['quiet', 'normal', 'loud'];
console.log(zipper(array3, array4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]
