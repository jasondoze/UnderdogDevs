// commonly used character in a string
const normalizeString = (string) => {
  // remove non alphabetic chars
  return string.replace(/[^\w]/g, '').toLowerCase();
};
const getMaxChar = (string) => {
  const charMap = {};
  // set the max to 0
  let max = 0;
  // set the result to empty string
  let maxChar = '';
  for (let char of normalizeString(string)) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      // create a key on the map assigned to 1
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    // if current char is greater than previous max
    if (charMap[char] > max) {
      // assign the count of this char to max
      max = charMap[char];
      // assign this char as max character
      maxChar = char;
    }
  }
  return maxChar;
};
console.log(getMaxChar('aaacccBBcccd'));
console.log(getMaxChar('a a a cc ccccd'));
console.log(getMaxChar('aaacc ccc BB Bcd ******'));

// const maxChar =
