function extract(object) {
  let extractArr = [];
  let keys = Object.keys(object);
  extractArr.push(keys);
  return keys;
}
console.log(extract({ j: 9, i: 2, x: 3, z: 4 }));
// [ 'j', 'i', 'x', 'z' ]

// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(obj) {
  let values = Object.values(obj);

  let sum = 0;
  for (let i in values) {
    sum += values[i];
  }
  return sum;
}
console.log(myFunction({ a: 1, b: 2, c: 3 }));




