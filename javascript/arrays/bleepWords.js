
// Write a function `bleepVowels` that accepts a string as an argument. The function should return
// a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.

let bleepVowels = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let output = '';
  for (let i = 0; i < str.length; i++) {
    // if the char is a vowel
    if (vowels.indexOf(str[i]) > -1) {
      output += '*';
    } else {
      // else the char is not a vowel
      output += str[i];
    }
  }
  return output;
};

console.log(bleepVowels('skateboard')); // 'sk*t*b**rd'
console.log(bleepVowels('slipper')); // 'sl*pp*r'
console.log(bleepVowels('range')); // 'r*ng*'
console.log(bleepVowels('brisk morning')); // 'br*sk m*rn*ng'
console.log(bleepVowels('mrngpsh')); // 'br*sk m*rn*ng'