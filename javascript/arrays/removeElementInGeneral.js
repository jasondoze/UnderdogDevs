/*
We are going to complete a function that takes in two parameters, 
an array and an index, removes the element from the index of the array, 
and returns the array. Your function should use the .splice() method to 
remove the element from the input array, at the given index, then return 
the array. Below are examples of the code running, assuming that you will 
have completed the described function: removeAnElementInGeneral.
*/

let removeAnElementInGeneral = (array, index) => {
  array.splice(index, 1);
  return array;
};

var resultArray1 = removeAnElementInGeneral([8, 9, 10, 'bad entry', 11], 3);
console.log('should log [8, 9, 10, 11]:', resultArray1);

var resultArray2 = removeAnElementInGeneral(['one', 'two', 452, 'three'], 2);
console.log('should log ["one", "two", "three"]:', resultArray2);
