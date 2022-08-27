/*
Write a function `funnySound` that accepts two strings as arguments. 
The function should return a new string containing the first three 
characters of both strings concatenated together.

You can assume that the arguments are both at least three characters long.
*/

let funnySound = (str1, str2) => {
  let firstThree = str1.slice(0, 3); // (start extraction, extract up to but not including)
  let secondThree = str2.slice(0, 3);
  return firstThree + secondThree;
};
console.log(funnySound('tiger', 'spoon')); // 'tigspo'
console.log(funnySound('computer', 'phone')); // 'compho'
console.log(funnySound('skate', 'bottle')); // 'skabot'
console.log(funnySound('frog', 'ashtray')); // 'froash'