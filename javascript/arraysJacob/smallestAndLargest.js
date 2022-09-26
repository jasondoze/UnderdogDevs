// Find the smallest and largest numbers
// Deduce the smallest and the largest number from the supplied numeric array.
// Return an array containing these numbers, smallest number first.

const findSmallestAndLargestNumbers = (someArray) => {
  let result = [];
  // find the smallest number in the array
  let smallest = Math.min(...someArray);
  // find the largest number in the array
  let largest = Math.max(...someArray);
  // log the smallest and largest numbers in the array
  result.push(smallest, largest)
  return result;
};

console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2])); // solution provided: 2, 28


//What is the return value of findSmallestAndLargestNumbers([14, 28, 3, 8, 2]) 2, 28

// my changed solution to return an array containing those numbers: [2, 28]