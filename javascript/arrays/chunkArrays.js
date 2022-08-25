/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 */
// create a result arr variable
// iterate through the array
// iterate up to the size variable
// if the modulus of size === 0

const chunk = (array, size) => {
  let chunkedArray = [];
  let index = 0;
  // while index is less than the length of the array
  while (index < array.length) {
    console.log(index, array.length, 'index, arry.length');
    // push the sliced array at the first index as first param, 
    // the index plus the size as second param
    chunkedArray.push(array.slice(index, size + index));
    console.log(chunkedArray, 'chnk Arr');
    // reassign index to index plus the size
    index += size;
    console.log(index, size, 'index, size');
  }
  return chunkedArray;
};
const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
 console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

