// Array.prototype.values()
// The values() method returns a new array iterator object that iterates the value of each index in the array.

const array = ['a', 'b', 'c'];
const iterator = array.values();

for (const value of iterator) {
  console.log(value);
}
// a
// b
// c

console.log('-------------------------');

/*
Iteration using for...of loop
Because values() returns an iterable iterator, you can use a for...of loop to iterate it.
*/

const arr = ['a', 'b', 'c', 'd', 'e'];
const iteratoR = arr.values();

for (const letter of iteratoR) {
  console.log(letter);
}
/*
a
b
c
d
e
*/

console.log('-------------------------');

/*
Iteration using next()
Because the return value is also an iterator, you can directly call its next() method.
*/

const arR = ['a', 'b', 'c', 'd', 'e'];
const iterable = arR.values();

console.log(iterable.next()); // { value: 'a', done: false }
console.log(iterable.next()); // { value: 'b', done: false }
console.log(iterable.next()); // { value: 'c', done: false }
console.log(iterable.next()); // { value: 'd', done: false }
console.log(iterable.next()); // { value: 'e', done: false }
console.log(iterable.next()); // { value: undefined, done: true }
console.log(iterable.next().value);  // undefined
