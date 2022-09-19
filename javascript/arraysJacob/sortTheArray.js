// Shift all numeric values to the beginning
// The supplied array will contain both numeric and non-numeric characters.

// Return a new array where all numeric values are positioned at the beginning
// of the array, in ascending order. The non-numeric values must come after these,
// also ordered appropriately.

const sortTheArray = (someArray) => {
  let number = [];
  let string = [];
  for (let i = 0; i < someArray.length; i++) {
    if (typeof someArray[i] === 'number') {
      number.push(someArray[i]);
      number.sort((a, b) => a - b);
      console.log(number);
    } else {
      string.push(someArray[i])
      string.sort((a, b) => a - b);
      console.log(string);
    }
  }
  return number.concat(string);
};

console.log(sortTheArray(['b', 6, 'a', 'q', 7, 2]));
// [2, 6, 7, "a", "b", "q"]

let arr = ['a', 'b', 'c'];
console.log(arr.sort((a, b) => a - b));
