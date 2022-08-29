// Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:

// the first element of the array as the object's key, and
// the last element of the array as that key's value.
// Example input:

var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];

let transformFirstAndLast = (arr) => {
  let returnObj = {};
  let key = arr[0];
  let value = arr[3];

  returnObj[key] = value;

  return returnObj;
};

console.log(transformFirstAndLast(input));
// Function's return value (output):

// {
//   Queen : 'Beyonce'
// }
