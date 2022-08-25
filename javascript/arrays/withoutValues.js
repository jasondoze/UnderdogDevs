/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 */
const without = (array, ...args) => {
  // console.log(...args);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!args.includes(array[i])) {
      result.push(array[i])
    }
  }
  return result;
};
const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2)); // [3]
