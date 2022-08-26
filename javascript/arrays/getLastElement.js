// Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.

let last = (array, n) => {
  // if (n == null) {
  //   return array[array.length - 1];
  // }
 

  return array.slice(- n);
  
};
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 4));
console.log(last([7, 9, 0, -2], 2));
