// Find the odd one out
// Find the odd one out in the provided array. All array elements are equal,
// except one. Your function must return this odd one out.

// go over each character
// check if all the characters are the same
// if they are not, print the unique character

const findOddOneOut = (someArray) => {
  let result = [];
  // iterate over the length of the array
  for (let i = 0; i < someArray.length; i++) {
   
    // if the value at i does not include initialized first variable
    if (
      someArray.indexOf(someArray[i]) === someArray.lastIndexOf(someArray[i])
    ) {
      // return that value
      result.push(someArray[i]);
    }
  }
  return result;
};

console.log(findOddOneOut(['a', 'a', 'b', 'a'])); // b
console.log(findOddOneOut(['b', 'a', 'a', 'a'])); // b
