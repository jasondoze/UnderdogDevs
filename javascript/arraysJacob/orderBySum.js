// Order the arrays by sum, ascending or descending
// Given an array of arrays (ie. a multidimensional array),
// each containing only numeric values, order these arrays
// by the sum of the elements within.

// const orderBySum = (someArray) => {
//   // create a sum variable to add the array elements
//   let reducedPairs = [];
//   // iterate over the array of arrays
//   for (let i = 0; i < someArray.length; i++) {
//     // create a pairs array variable
//     let pairs = someArray[i];
//     // console.log(pairs);
//     // add up the pairs of numbers
//     let sumPairs = pairs.reduce((previous, current) => {
//       return previous + current;
//     }, 0);
//     reducedPairs.push(sumPairs);
//     let sortedPairs = reducedPairs.sort((a, b) => {
//       return a - b;
//     });
//     console.log(sortedPairs, sumPairs);
//   }
// };

// console.log(
//   orderBySum([
//     [1, 3],
//     [4, 2],
//     [2, 1],
//   ])
// );
// // // [[2,1], [1,3], [4,2]]

const orderBySum = (someArray) => {
  // create a sum variable to add the array elements
  let reduceNums = [];
  // iterate over the array of arrays
  for (let i = 0; i < someArray.length; i++) {
    // create a pairs array variable
    let pairs = someArray[i];

    // add up the pairs of numbers to one value  4, 6, 3
    let sumNums = pairs.reduce((previous, current) => {
      return previous + current;
    }, 0);
    // push the reduced numbers into the reduced nums arr
    reduceNums.push(sumNums, pairs);
  }
};

console.log(
  orderBySum([
    [1, 3],
    [4, 2],
    [2, 1],
  ])
);
// // [[2,1], [1,3], [4,2]]
