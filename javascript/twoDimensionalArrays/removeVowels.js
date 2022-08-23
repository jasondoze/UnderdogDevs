// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.

let removeVowels = (str) => {
  let newStr = '';
  let vowels = 'aeiou';
  for (let i = 0; i < str.length; i++) {
    let chars = str[i];
    if (!vowels.includes(chars)) {
      newStr += chars;
    }
  }
  return newStr;
};

console.log(removeVowels('jello')); // jll
console.log(removeVowels('sensitivity')); // snstvty
console.log(removeVowels('cellar door')); // cllr dr
