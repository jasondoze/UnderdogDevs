/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

const getCount = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (const chars of str) {
    // console.log(chars);
    if (vowels.includes(chars)) {
      count++;
    }
  }
  return count;
};
console.log(getCount('abracadabra'));
console.log(getCount('pear tree'));
console.log(getCount(' '));

// using reduce
const getCount2 = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').reduce((acc, char) => {
    if (vowels.includes(char)) {
      acc++;
    }
    return acc;
  }, 0);
};
console.log(getCount2('abracadabra'));
console.log(getCount2('pear tree'));
console.log(getCount2(' '));

// using regEx
const getCount3 = (str) => {
  return (str.match(/[aeiou]/g) || []).length;
};
console.log(getCount3('abracadabra'));
console.log(getCount3('pear tree'));
console.log(getCount3(' '));
