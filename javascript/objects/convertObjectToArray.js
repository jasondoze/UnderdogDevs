// Write a function called "getAllKeys" which returns an array of all
// the input object's keys. Example input:

let input = {
  name: 'Sam',
  age: 25,
  hasPets: true,
};

// ['name', 'age', 'hasPets'];

let alternativeInput = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1,
};

// ['a', 'number', 'hungry', 'grammyWins'];

let getAllKeys = (obj) => {
  let keyArr = [];
  for (let keys in obj) {
    keyArr.push(keys)
  }
  return keyArr
};

console.log(getAllKeys(alternativeInput));
