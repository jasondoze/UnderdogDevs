// Shift all numeric values to the beginning
// The supplied array will contain both numeric and non-numeric characters.

// Return a new array where all numeric values are positioned at the beginning
// of the array, in ascending order. The non-numeric values must come after these,
// also ordered appropriately.

const sortTheArray = (someArray) => {
  // create a number arr variable
  let number = [];
  // create a string arr variable
  let string = [];
  // iterate over the the mixed array
  for (let i = 0; i < someArray.length; i++) {
    // if the type of the value at i is a number
    if (typeof someArray[i] === 'number') {
      // push that value to the number array
      number.push(someArray[i]);
      // sort that array
      number.sort();
      // console.log(number);
      // if it is not a number, push it to the string array
    } else {
      string.push(someArray[i]);
      // sort the string array
      string.sort();
      // console.log(string);
    }
  }
  // return the number array first plus the string array
  return number.concat(string);
};

console.log(sortTheArray(['b', 6, 'a', 'q', 7, 2]));
// [2, 6, 7, "a", "b", "q"]
