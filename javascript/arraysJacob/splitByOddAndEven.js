// Split the numeric array by odd/even
// Write a function to separate a single array in to two separate arrays.
// The supplied array will only contain numeric values. Your function should
// output two arrays: one containing odd numbers, the other containing even numbers.

// The returned arrays should be ordered appropriately, with distinct values
// only (no duplicates). The even array should be returned first.

// create an even array
// create an odd array
// iterate through the array
// remove duplicates in the array
// if the numbers are even push to even
// else push to odd
// add the odd to the even array
const splitByOddAndEven = (someArray) => {
  // create a no duplicates array
  let noDupes = [];
  // create an even array
  let even = [];
  // create an odds array
  let odd = [];
  // for the numbers whose indexes match their indexOf values, return those numbers
  let unique = someArray.filter((number, index) => {
    return someArray.indexOf(number) === index;
  });
  // iterate over the unique array
  for (let i of unique) {
    // if the numbers are even
    if (i % 2 === 0) {
      // push them to the evens arr
      even.push(i);
      even.sort();
      // else push to odds
    } else {
      odd.push(i);
      odd.sort();
    }
  }
  // push the evens in first, then the odds
  noDupes.push(even, odd);
  // noDupes.push(odd);
  return noDupes;
};

console.log(splitByOddAndEven([2, 3, 7, 6, 2, 4, 9]));
// [[2, 4, 6], [3, 7, 9]]

// output: [ [ 2, 4, 6 ], [ 3, 7, 9 ] ]
