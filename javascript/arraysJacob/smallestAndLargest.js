// Find the smallest and largest numbers
// Deduce the smallest and the largest number from the supplied numeric array.
// Return an array containing these numbers, smallest number first.

const findSmallestAndLargestNumbers = (someArray) => {
  // find the smallest number in the array
  let smallest = Math.min(...someArray);
  // find the largest number in the array
  let largest = Math.max(...someArray);
  // log the smallest and largest numbers in the array
  console.log(smallest, largest);
};

console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2]));
// 2, 28
