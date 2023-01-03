const babyNames2020 = require('fs')
  .readFileSync('../baby_names_2020_short.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.

const longestBaby = (array) => {
  // map the lengths of the array
  let lengths = array.map((element) => element.length);
  // find longest lengths
  let maxLength = Math.max(...lengths);
  // return elements that match the element length to the max length
  return array.filter((element) => element.length === maxLength);
};
console.log(longestBaby(babyNames2020));
