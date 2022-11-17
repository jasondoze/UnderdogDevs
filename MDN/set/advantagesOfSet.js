/*
 Set objects are collections of values. What makes a Set different is that it will only store unique values. As a result, using a Set can solve certain problems in new ways.
*/
let myArr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
let arrSet = new Set(myArr);
console.log(arrSet);
// Set(6) { 1, 2, 3, 4, 5, 6 }

let myStr = 'hello';
let strSet = new Set(myStr);
console.log(strSet);
// Set(4) { 'h', 'e', 'l', 'o' }

let array = ['hello', 'hello', 2, [1], 1, [3], [3], { a: 1 }, { a: 1 }];
let setArr = new Set(array);
console.log(setArr);
// Set(8) { 'hello', 2, [ 1 ], 1, [ 3 ], [ 3 ], { a: 1 }, { a: 1 } }

/*
We can see that in the first two examples, duplicate characters and integers are not passed into the Set. In the third example, we see a couple of interesting things:

This time, the whole word ‘hello’ is passed in as it is part of an array, whereas ‘hello’ is passed in as a string in the second example
We can see that the nested arrays and objects, while duplicates of one another, are not removed.
*/

// You can also create a new Set from an existing array.
let newArr = [1, 2, 3, 4];
let mySet = new Set(newArr);
console.log(mySet);
// Set(4) { 1, 2, 3, 4 }

// This can also be done with an existing string. As you can see in the example below, duplicate strings are not passed into the Set.

let newStr = 'hello';
let stringSet = new Set(newStr);
console.log(stringSet);
// Set(4) { 'h', 'e', 'l', 'o' }
// To add to this Set, we just need to use the add() method.
stringSet.add('hello');
console.log(stringSet);
// Set(5) { 'h', 'e', 'l', 'o', 'hello' }

/*
This time, it hasn’t removed duplicate letters of the string ‘hello,’ because we are passing in the string as a whole and not as an iterable. If we tried to pass in the same string again, the Set would not allow the duplicate.
*/
stringSet.add('hello');
console.log(stringSet);
// Set(5) { 'h', 'e', 'l', 'o', 'hello' }
stringSet.add('goodbye');
console.log(stringSet);
// Set(6) { 'h', 'e', 'l', 'o', 'hello', 'goodbye' }

/*
Sets can hold more than strings, so let’s pass in some other data types. The values in a Set can consist of primitive data types like strings and integers, as well as more complex elements like objects and arrays.
*/
stringSet.add(123);
stringSet.add({ a: 1, b: 2 });
stringSet.add([4, 5, 6]);
stringSet.add(true);
console.log(stringSet);
/*
Set(10) {
  'h',
  'e',
  'l',
  'o',
  'hello',
  'goodbye',
  123,
  { a: 1, b: 2 },
  [ 4, 5, 6 ],
  true
}

Checking whether a Set contains an element
Sets offer an easy way to check for the existence of a particular element within the Set. Calling the .has() method will accomplish this, and will return true or false.
*/

let theSet = new Set();
theSet.add('hello');
theSet.add(123);
console.log(theSet);
// Set(2) { 'hello', 123 }
console.log(theSet.has(123));
// true
console.log(theSet.size);
// 2
theSet.delete('hello');
console.log(theSet);
// Set(1) { 123 }
theSet.clear();
console.log(theSet);
// Set(0) {}

// for…of
const nameArr = ['Koy', 'Girthy', 'Noram', 'Cholar'];
let nameSet = new Set(nameArr);
console.log(nameSet);
// Set(4) { 'Koy', 'Girthy', 'Noram', 'Cholar' }
for (const name of nameSet) {
  console.log(`It's ${name}`);
}
/*
It's Koy
It's Girthy
It's Noram
It's Cholar
*/