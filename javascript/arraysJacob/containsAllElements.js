// Does the array contain all of the elements?
// Write a function to accept two arrays. Does the first array contain all elements
// represented in the second array?

const containsAllElements = (firstArray, secondArray) => {
  // your code

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i].length !== secondArray[i].length) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(containsAllElements(['monday', 'tuesday'], ['tuesday'])); // false
