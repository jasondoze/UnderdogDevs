// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

console.log('-----------------------');

const array = ['a', 'b', 'c', 'e', 'f', 'g', 'h', 'i'];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

/*
Calling entries() on non-array objects
The entries() method reads the length property of this and then accesses each integer index.
*/

console.log('-----------------------');


const arrayLike = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
};

for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
