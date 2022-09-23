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

console.log(containsAllElements( ['monday', 'tuesday'], ['tuesday'])); // solution provided: false
// ['monday', 'tuesday'] contains tuesday, so why does this return false? Maybe I am misreading the question?
// What does containsAllElements(['tuesday'], ['monday', 'tuesday']) return?
console.log(containsAllElements( ['tuesday'],['monday', 'tuesday'])); // false

/*
This was the solution provided from the website, I'm confused on what the question is asking.
*/
