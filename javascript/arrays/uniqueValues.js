/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 */
const unique = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
};
const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]
