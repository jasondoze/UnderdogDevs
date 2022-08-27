/*
Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
return the uppercase version of the string if the boolean is true. The function should return the
lowercase version of the string if the boolean is false.
*/

let caseChange = (string, bool) => {
  if (bool === true) {
    return string.toUpperCase();
  } else {
    return string.toLowerCase();
  }
};

console.log(caseChange('Super', true)); // 'SUPER'
console.log(caseChange('Super', false)); // 'super'
console.log(caseChange('tAmBourine', true)); // 'TAMBOURINE'
console.log(caseChange('tAmBourine', false)); // 'tambourine'