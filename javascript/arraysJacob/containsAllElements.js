// Does the array contain all of the elements?
// Write a function to accept two arrays. Does the first array contain all elements
// represented in the second array?

const containsAllElements = (firstArray, secondArray) => {
  // iterate over the array
  for (let i = 0; i < firstArray.length; i++) {
    // if the lengths of the arrays do not match, 
    // the arrays are not possibly containing all the elements
    if (firstArray[i].length !== secondArray[i].length) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(containsAllElements(['monday', 'tuesday'], ['tuesday'])); // false
