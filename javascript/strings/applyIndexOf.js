/*
We are going to complete a function that takes in two parameters (string, subString), 
and returns the index of the string where the subString can be found. Your function 
should create an index variable and assign it to a call of the indexOf() method on 
the string, and passing subString as an argument, and return the index variable. 
Below are examples of the code running, assuming that you will have completed the 
described function: applyIndexOf.
*/

let string1 = 'Quicksort';
let subString1 = 'sort';

let applyIndexOf = (str, substr) => {
  let index = str.indexOf(substr);
  return index;
};

let resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5:', resultIndex1);

let string2 = 'size,color,cut,price';
let subString2 = 'cut';
let resultIndex2 = applyIndexOf(string2, subString2);
console.log('should log 11:', resultIndex2);
