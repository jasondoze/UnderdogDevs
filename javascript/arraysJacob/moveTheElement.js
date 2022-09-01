// Move the element
// Given an array and two indexes, move the relevant element within the array
// to its new position.

const move = (someArray, firstIndex, secondIndex) => {
  // your code
  console.log(someArray);
  var selectValue = someArray[firstIndex];
  console.log('element', selectValue);
  someArray.splice(firstIndex, 1);
  console.log(someArray);
  console.log('first index', firstIndex);
  someArray.splice(secondIndex, 0, selectValue);
//   console.log(someArray);
  console.log('second index', secondIndex);
//   console.log(someArray);

    return someArray;
};

console.log(move([4, 5, 7], 2, 1)); // [4, 7, 5]
