/*We are going to complete a function that takes in three parameters, 
an array and two integer indexes (start, end), and returns a portion 
of the array from before the start index up to, but not including, the 
end index. Your function should create a sliceOfArray variable and assign 
it to a call to the slice method on the array, starting from before start, 
up to, but not including, end, and return the sliceOfArray variable. 
Below are examples of the code running, assuming that you will have 
completed the described function: applySlice.
*/

let applySlice = (array, start, end) => {
  let sliced = array.slice(start, end);
  return sliced;
};

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultOfSlice1 = applySlice(array1, 1, 4);
console.log('should log ["u", "e", "u"]:', resultOfSlice1);

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultOfSlice2 = applySlice(array2, 2, 8);
console.log('should log [2, 3, 4, 5, 6, 7]:', resultOfSlice2);

let copySlice = (array) => {
  let copy = array.slice();
  return copy;
};

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultCopy1 = copySlice(array1);
console.log('should log ["Q", "u", "e", "u", "e"]:', resultCopy1);

var array2 = [0, 1, 2, 3, 4];
var resultCopy2 = copySlice(array2);
console.log('should log [0, 1, 2, 3, 4]:', resultCopy2);
