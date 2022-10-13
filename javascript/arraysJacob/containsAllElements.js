// Does the array contain all of the elements?
// Write a function to accept two arrays. Does the first array contain all elements
// represented in the second array?
// is the first array a super set of the second array

// isSuperSet(['m', 't'], ['t']) // true
// isSuperSet(['m', 't'], ['t', 'w']) // false
// isSuperSet(['t'], ['m', 't']) // false

// The includes() method determines whether an array includes a certain value among its
// entries, returning true or false as appropriate.


const containsAllElements2 = (firstArray, secondArray) => {
  // iterate over the array
  for (let i = 0; i < secondArray.length; i++) {
    // if the days in the array dont have the day in the second array
    if (!firstArray.includes(secondArray[i])) {
      return false;
    }
  }
  return true;
};
console.log(
  containsAllElements2(['monday', 'tuesday'], ['tuesday', 'wednesday'])
); // false


// existential vs. universal