/*
Write a function `wackyWord` that accepts two strings as arguments. 
The function should return a new string containing the first three 
characters of the first string concatenated with the last two
character of the second string.
*/

let wackyWord = (str1, str2) => {
  let first = str1.slice(0, 3);
  let second = str2.slice(-2);
  return first + second;
};

console.log(wackyWord('very', 'kindly')); // 'verly'
console.log(wackyWord('forever', 'sick')); // 'forck'
console.log(wackyWord('cellar', 'door')); // 'celor'
console.log(wackyWord('bagel', 'sweep')); // 'bagep'