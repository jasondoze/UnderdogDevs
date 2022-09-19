// Move the element
// Given an array and two indexes, move the relevant element within the array
// to its new position.

const move = (someArray, firstIndex, secondIndex) => {
  // create a variable to assign someArray at first index parameter
  var selectValue = someArray[firstIndex];
  // remove one value starting at index 2: 7
  someArray.splice(firstIndex, 1);
  // [ 4, 5 ]
  // splice the array starting at index one, removing 0 items, and adding
  // select value which is someArray[2]: 7
  someArray.splice(secondIndex, 0, selectValue);

  return someArray;
};

console.log(move([4, 5, 7], 2, 1)); // [4, 7, 5]
