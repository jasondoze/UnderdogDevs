// Given a list of non-negative integers and a target sum,
// find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

let findPairForSum = (array, target) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push(array[i], array[j]);
      }
    }
  }
  return result;
};

console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9));
