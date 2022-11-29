/* Array.prototype.keys()
The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
*/

const array = ['a', 'b', 'c'];
const iterator = array.keys();

for (const key of iterator) {
  console.log(key);
}
// 0
// 1
// 2

/*
Using keys() on sparse arrays
Unlike Object.keys(), which only includes keys that actually exist in the array, the keys() iterator doesn't ignore holes representing missing properties.
*/

console.log('-------------------------');

const arr = ['a', , 'c'];
const sparseKeys = Object.keys(arr);
// the keys() iterator doesn't ignore holes representing missing properties
const denseKeys = [...arr.keys()];
console.log(sparseKeys);
// [ '0', '2' ]
console.log(denseKeys);
// [ 0, 1, 2 ]

/*
Calling keys() on non-array objects
The keys() method reads the length property of this and then yields all integer indices between 0 and length - 1. No index access actually happens.
*/

console.log('-------------------------');


const arrayLike = {
  length: 3,
};

for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}

console.log('-------------------------');
