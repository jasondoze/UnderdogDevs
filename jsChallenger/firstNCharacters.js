// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const myFunction = (a) => {
  return a.slice(0, 3);
};

console.log(myFunction('abcdefg'));

console.log(myFunction('1234'));

console.log(myFunction('fgedcba'));
