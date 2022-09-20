// Spell out the alphabet
// The supplied array is a multidimensional array composed entirely of letters,
// broken down into sets of 3. The letters within each set of 3 are in random order;
// and the overall array pieces are in random order, also.

// The array is composed in such a way that it can be sorted in to an alphabetic order.
// Your function should reorder all of these pieces to accomplish this.
const jumbledAlphabetically = [
  ['e', 'd', 'f'],
  ['a', 'c', 'b'],
  ['m', 'o', 'n'],
];
// let flatten = jumbledAlphabetically.flat().sort();
// console.log(flatten);

const alphabetize = (someArray) => {
  // create a result array var
  let result = [];
  // flatten and sort the array
  let flatten = someArray.flat().sort();
  console.log(flatten.length);
  // iterate over the flattened array for every third index
  for (let i = 0; i < flatten.length; i+=3) {
    // push 3 values at a time as an array into the result array
    result.push([flatten[i], flatten[i + 1], flatten[i + 2]]);
  }
  return result;
};

console.log(alphabetize(jumbledAlphabetically));
// [
//   ['a', 'b', 'c'],
//   ['d', 'e', 'f'],
//   ['m', 'n', 'o'],
// ];

// output: [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'm', 'n', 'o' ] ]
