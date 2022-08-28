/*
We are going to complete a function that takes in two parameters, 
\an array and an element, adds the element to the front of the array, 
and returns the array. Your function should use the .unshift() method 
to add the input element to the front of the input array, then return 
that array. Below are examples of the code running, assuming that you 
will have completed the described function: applyUnshift.

*/

let applyUnshift = (array, element) => {
  array.unshift(element);
  return array;
};

var resultArray1 = applyUnshift([7, 9, 4], 1);
console.log('should log [1, 7, 9, 4]:', resultArray1);
// console.log(applyUnshift([7, 9, 4], 1));

var resultArray2 = applyUnshift(['ef', 'hi'], 'bc');
console.log('should log ["bc", "ef", "hi"]:', resultArray2);
