/*
We are going to complete a function that takes in four parameters, an array, 
an index, and two new elements, removes 2 elements, beginning at the index, 
adds the two new elements, and returns the array. Your function should use 
the .splice() method to remove two elements from the input array, at the given 
index, adds the two new elements in their place, then return the array. Below 
are examples of the code running, assuming that you will have completed the 
described function: applySplice.
*/

let applySplice = (array, index, element1, element2) => {
  array.splice(index, 2, element1, element2);
  return array;
};

var resultArray1 = applySplice(
  [8, 9, 10, 'bad entry1', 'bad entry2', 13],
  3,
  11,
  12
);
console.log('should log [8, 9, 10, 11, 12, 13]:', resultArray1);

var resultArray2 = applySplice(
  ['one', 'two', 452, 672, 'five'],
  2,
  'three',
  'four'
);
console.log(
  'should log ["one", "two", "three", "four", "five"]:',
  resultArray2
);
