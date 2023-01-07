const words = require('fs')
  .readFileSync('../countries.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What is the shortest country name? Make sure your solution can handle ties.

const shortest = (array) => {
  // Create an array of the lengths of the elements in the input array
  const lengths = array.map(element => element.length);
  
  // Find the minimum length in the lengths array
  const minLength = Math.min(...lengths);
  
  // Filter the input array to create a new array containing only the elements
  // that have the minimum length
  return array.filter(element => element.length === minLength);
};

console.log(shortest(words)); 