/*
We are going to complete a function that takes in two array parameters, 
and returns an array containing all of the elements of the two input 
arrays. Your function should create a concattedArray variable and assign 
it to a call to the concat method on the input array, applied to the other 
input array, and return the concattedArray variable. Below are examples of 
the code running, assuming that you will have completed the described 
function: applyConcat.
*/

let applyConcat = (array1, array2) => {
  let concatArr = array1.concat(array2);
  return concatArr;
};

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var resultConcat1 = applyConcat(array1, array2);
console.log('should log ["a", "b", "c", "d", "e", "f"]:', resultConcat1);

var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var resultConcat2 = applyConcat(array3, array4);
console.log('should log [1, 2, 3, 4, 5, 6]:', resultConcat2);
