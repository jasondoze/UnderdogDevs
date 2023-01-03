const babyNames2020 = require('fs')
  .readFileSync('../baby_names_2020_short.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What is the shortest baby name in the top 40 baby names for 2020?

const shortestBaby = (array) => {
  // map through the array to assign the array as length numbers
  let lengths = array.map((element) => element.length);
  // find the minimum length
  let minLength = Math.min(...lengths);
  // return the array elements that filter out elements lengths that match the min length
  return array.filter((element) => element.length === minLength);
};
console.log(shortestBaby(babyNames2020));
