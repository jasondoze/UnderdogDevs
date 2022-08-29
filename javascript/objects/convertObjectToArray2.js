/*
Write a function called "listAllValues" which returns an array 
of all the input object's values. Example input:
*/

var input = {
  name: 'Krysten',
  age: 33,
  hasPets: false,
};
// [ 'Krysten', 33, false ]
var alternativeInput = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1,
};

// ['a', 11, true, 1];

let listAllValues = (obj) => {
  let valueArr = [];
  for (let values in obj) {
    valueArr.push(obj[values]);
  }
  return valueArr;
};

console.log(listAllValues(input));
