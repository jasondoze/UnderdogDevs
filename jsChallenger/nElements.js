// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const myFunction = (a) => {
  // for (let i = 0; i < a.length; i++) {
  return a.slice(0, 3);
};

console.log(myFunction([1, 2, 3, 4]));
// Expected
// [1,2,3]
console.log(myFunction([5, 4, 3, 2, 1, 0]));
// Expected
// [5,4,3]
