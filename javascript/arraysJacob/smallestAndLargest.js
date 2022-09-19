// Find the smallest and largest numbers
// Deduce the smallest and the largest number from the supplied numeric array.
// Return an array containing these numbers, smallest number first.

const findSmallestAndLargestNumbers = (someArray) => {
  let smallest = Math.min(...someArray);
  let largest = Math.max(...someArray);
  console.log(smallest, largest);
};

console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2]));
// 2, 28
