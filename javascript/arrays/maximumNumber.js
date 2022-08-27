// Write a function `maximum` that accepts an array of numbers as an argument. The function should
// return the largest number of the array. If the array is empty, then the function should return null.

let maximum = (arraz) => {
  if (arraz.length === 0) {
    return null;
  }
  let longest = arraz[0];
  for (let i = 0; i < arraz.length; i++) {
    let num = arraz[i];
    if (num > longest) {
      longest = num;
    }
  }
  return longest;
};

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null