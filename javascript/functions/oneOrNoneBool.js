/*
Write a function `oneOrNone` that accepts two booleans as arguments. 
The function should return true if exactly one of the arguments is true. 
If BOTH arguments are true, then it should return false.
*/

let oneOrNone = (bool1, bool2) => {
  if (bool1 === bool2) {
    return false;
  } else {
    return true;
  }
};
console.log(oneOrNone(false, false)); // false
console.log(oneOrNone(true, false)); // true
console.log(oneOrNone(false, true)); // true
console.log(oneOrNone(true, true)); // false