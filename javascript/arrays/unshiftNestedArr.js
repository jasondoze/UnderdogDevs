/*
We are going to complete a function that takes in three parameters, 
a nested array of arrays, an index, and an element, then adds the 
element to the front of the inner array located at the index within 
the input array of arrays, and returns the array of arrays. Your 
function should use the .unshift() method to add the input element 
to the front of the inner array located at the given index of the 
array of arrays, then return that array of arrays. Below are examples 
of the code running, assuming that you will have completed the described 
function: applyUnshiftAgain.
*/

let applyUnshiftAgain = (array, index, element) => {
  array[index].unshift(element);
  return array;
};

var resultArray1 = applyUnshiftAgain(
  [
    [1, 3],
    [10, 11],
    [9, 4],
  ],
  1,
  5
);
console.log('should log [ [1, 3], [5, 10, 11], [9, 4] ]:', resultArray1);

var resultArray2 = applyUnshiftAgain(
  [
    ['ag', 'bc'],
    ['ef', 'hi'],
  ],
  0,
  'iq'
);
console.log('should log [ ["iq", "ag", "bc"], ["ef", "hi"] ]:', resultArray2);
