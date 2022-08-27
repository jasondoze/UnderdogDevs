// Write a function `removeCapitals` that accepts a string as an argument. The function should return a
// new version of the string with all capital letters removed.

let removeCapitals = (string) => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      newString += string[i];
    }
  }
  return newString;
};

console.log(removeCapitals('fOrEver')); // 'frver'
console.log(removeCapitals('raiNCoat')); // 'raioat'
console.log(removeCapitals('cElLAr Door')); // 'clr oor'