// * Task description: Write a method that turns a deep array into a plain array

const flatten = (array) => {
  return array.flat(2);
};
const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]
