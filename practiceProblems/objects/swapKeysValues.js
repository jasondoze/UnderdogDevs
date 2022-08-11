// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
  for (let key in obj) {
    // console.log(key);
    let oldValue = obj[key];
    // console.log(oldValue);
    delete obj[key];
    obj[oldValue] = key;
    // console.log(obj[oldValue]);
  }
  return obj;
}

console.log(myFunction({ z: 'a', y: 'b', x: 'c', w: 'd' }));
// Expected {a:'z',b:'y',c:'x',d:'w'}

function swapKeys(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(swapKeys({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' }));

function swappedKeys(obj) {
  let newValues = {};
  for (let key in obj) {
    newValues[obj[key]] = key;
  }
  return newValues;
}
console.log(swappedKeys({ a: 1, z: 24 }));

let keyVals = { 2: 'a', 4: 'b', 6: 'c', 8: 'd' };
let keyValArr = keyVals
