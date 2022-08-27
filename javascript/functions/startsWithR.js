/* Write a function `startsWithR` that accepts a string as an argument and 
returns a boolean indicating whether or not the string starts with 'r' or 'R'.
*/

let startsWithR = (str) => {
  if (str[0] === 'r' || str[0] === 'R') {
    return true;
  } else {
    return false;
  }
};
console.log(startsWithR('roger that')); // true
console.log(startsWithR('Row, row, row your boat')); // true
console.log(startsWithR('slip')); // false
console.log(startsWithR('Taxicab')); // false