// Build a new array by indexes
// From the first array, construct a new array based on the indexes supplied.

const buildArray = (someArray, indexes) => {
  // create a new array variable
  let newArr = [];
  // iterate over the days array
  for (let i = 0; i < someArray.length; i++) {
    // iterate over the indexes array
    for (let j = 0; j < indexes.length; j++) {
      // if the index of the days array matches the index of indexes arr
      if (i === indexes[j]) {
        // push the days at specified idexes to new arr
        newArr.push(someArray[i]);
      }
    }
  }
  return newArr;
};

console.log(buildArray(['mon', 'tue', 'wed', 'thur', 'fri'], [1, 3, 4]));
// ["tue", "thur", "fri"]

// How many times is i incremented when this runs on the example you console log? 
// 5
// How many times is j incremented?
// 15

// From the first array, construct a new array based on the indexes supplied.
const buildArray2 = (someArray, indexes) => {

};

console.log(buildArray2(['mon', 'tue', 'wed', 'thur', 'fri'], [1, 3, 4]));
// ["tue", "thur", "fri"]