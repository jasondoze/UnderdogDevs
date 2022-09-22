// Goal: solve this problem in < 30 minutes.

// Write a function that takes as input two arguments:

// 1. An array of numbers
// 2. An integer `k`

// and returns the `k` largest values from that array.
// The order of the elements in the returned array doesn’t matter.

// - Input array: `[5, 16, 7, 9, -1, 4, 3, 11, 2]`
// - `k`: 3
// - Result: `[16, 9, 11]`

let kHole = (someArray, k) => {
  let sorted = someArray.sort((a, b) => a - b);

  let sliced = sorted.slice(-k);
  return sliced;
};

console.log(kHole([5, 16, 7, 9, -1, 4, 3, 11, 2], 3));
