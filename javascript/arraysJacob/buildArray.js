// Build a new array by indexes
// From the first array, construct a new array based on the indexes supplied.

const buildArray = (someArray, indexes) => {
  // your code
  let newArr = [];
  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < indexes.length; j++) {
      if (i === indexes[j]) {
        newArr.push(someArray[i]);
      }
    }
  }
  return newArr;
};

console.log(buildArray(['mon', 'tue', 'wed', 'thur', 'fri'], [1, 3, 4]));
// ["tue", "thur", "fri"]
