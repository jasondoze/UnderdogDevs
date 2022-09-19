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

const alphabetize = (someArray) => {
  let flatten = someArray.flat();
  return flatten.sort((a, b) => a - b);
};

console.log(alphabetize(jumbledAlphabetically));
// [["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]
