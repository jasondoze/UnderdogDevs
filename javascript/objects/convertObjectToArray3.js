// Write a function called "convertObjectToArray" which
// converts an object literal into an array of arrays, like
// this:

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer',
};

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]
let convertObjectToArray = (obj) => {
  let container = [];
  for (let key in obj) {
    let keys = key;
    let values = obj[key];
    let pairs = [keys, values];

    container.push(pairs);
  }
  return container;
};

console.log(convertObjectToArray(input));
