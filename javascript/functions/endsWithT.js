// Write a function `endsWithT` that accepts a string as an argument.
// The function should return a boolean indicating whether or not the string
// ends with the character 't'.

let endsWithT = (str) => {
  if (str.endsWith('t')) {
    return true;
  } else {
    return false;
  }
};

console.log(endsWithT('smart')); // true
console.log(endsWithT('racket')); // true
console.log(endsWithT('taco')); // false
console.log(endsWithT('boomerang')); // false