// Find the odd one out
// Find the odd one out in the provided array. All array elements are equal,
// except one. Your function must return this odd one out.

// go over each character
// check if all the characters are the same
// if they are not, print the unique character

// 5 - 7 minutes
const findOddOneOut = (someArray) => {
  // initialize the first character
  let first = someArray[0];
//   console.log(first);
  // iterate over the length of the array
  for (let i = 1; i < someArray.length; i++) {
    if (!someArray[i].includes(first)) {
      return someArray[i];
    }
  }
};

console.log(findOddOneOut(['a', 'a', 'b', 'a'])); // b
