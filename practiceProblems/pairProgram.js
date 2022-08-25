// Write a function that takes as input two arguments:

// 1. An array of numbers
// 2. An integer `k`

// and returns the `k` largest values from that array. The order of the
// elements in the returned array doesn’t matter.

// Example

// - Input array: `[5, 16, 7, 9, -1, 4, 3, 11, 2]`
// - `k`: 3
// - Result: `[16, 9, 11]`

let kLargest = (array, k) => {
  let sortedArray = array.sort((a, b) => a - b);
  // console.log(sortedArray);
  // finding the max number
  // let maxNum = Math.max(...sortedArray);
  // iterate through sorted array
  // for (let i = 0; i < sortedArray.length; i++) {
  //   let num = sortedArray[i];
  // let length = sortedArray.length
  // console.log(length)
  return sortedArray.slice(sortedArray.length - k, sortedArray.length);
};
console.log(kLargest([5, 16, 17, 19, -1, 4, 3, 11, 2], 3));
