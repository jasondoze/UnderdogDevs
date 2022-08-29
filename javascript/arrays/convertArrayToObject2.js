/*
Write a function 'transformArrayToObject' which takes in an array of arrays, 
and returns an object with each pair of elements in the array as a key-value pair.
*/

var input = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', 1964],
];

let transformArrayToObject = (arrays) => {
  let carObject = {};

  for (let i = 0; i < arrays.length; i++) {
    let keys = arrays[i][0];
    let values = arrays[i][1];

    carObject[keys] = values;
  }
  return carObject;
};

console.log(transformArrayToObject(input));
// {
//   make : 'Ford',
//   model : 'Mustang',
//   year : 1964
// }
