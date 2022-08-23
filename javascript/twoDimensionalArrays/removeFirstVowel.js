// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

let removeFirstVowel = (string) => {
  let vowels = 'aeiou';
  for (let i = 0; i < string.length; i++) {
    let chars = string[i];
    if (vowels.includes(chars)) {
      return string.slice(0, i) + string.slice(i + 1);
    }
  }
  return string;
};

console.log(removeFirstVowel('volcano')); // 'vlcano'
console.log(removeFirstVowel('celery')); // 'clery'
console.log(removeFirstVowel('juice')); // 'jice'
console.log(removeFirstVowel('try')); // 'jice'
