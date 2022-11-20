/*
Function expressions are convenient when passing a function as an argument to another function. The following example shows a map function that should receive a function as first argument and an array as second argument:
*/

let birthYears = [1990, 1989, 2007, 2005, 1995, 2011];

// generic function
const getResultArray = (arr, func) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let value = func(arr[i]);
    result.push(value);
  }
  return result;
};

let calculateAge = (birthYear) => {
  return 2021 - birthYear;
};
let ages = getResultArray(birthYears, calculateAge); // pass the function as an argument
console.log(ages);

let isFullAge = (age) => {
  return age >= 18;
};

let isOfAge = getResultArray(ages, isFullAge);
console.log(isOfAge);
