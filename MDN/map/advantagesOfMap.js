/*
Advantages of a JavaScript Map

Map is an iterable keyed collection that remembers the original insertion order of the keys. It will always maintain this order of entries.

Map will only contain what you explicitly put into it so there are no surprise default keys.

In a Map, there is more flexibility with key values, as a key can be any value such as functions, objects, and primitives. In an Object, a key can only be a string or symbol. Depending on how you are storing your data, Map’s flexibility with more data types could be useful.

Other Important Differences
Other advantages of a Map include the size property, an easy way to get the number of items in the Map. With an Object, you would be on your own to figure out its size.

Iterating over a Map can be done directly, unlike an Object where you would have to obtain the keys/values/entries, typically as an Array, and then iterate over those values.

The performance of frequent additions or even removals of key-value pairs can be advantageous in a Map versus an Object, which is not optimized for these actions.
*/

const travelMap = new Map();
console.log(travelMap);
// Map(0) {}

// You can also initialize a Map with an existing Array (using a nested Array) or an Object.

const myArray = [
  ['Thailand', 24],
  ['Vietnam', 9],
  ['Columbia', 8],
];
const travelMap2 = new Map(myArray);
console.log(travelMap2);
// Map(3) { 'Thailand' => 24, 'Vietnam' => 9, 'Columbia' => 8 }

const myObj = {
  Thailand: 24,
  Vietnam: 9,
  Columbia: 8,
};
const travelMap3 = new Map(Object.entries(myObj));
console.log(travelMap3);
// Map(3) { 'Thailand' => 24, 'Vietnam' => 9, 'Columbia' => 8 }

/*
Map Properties and Methods
To add new key/value pairs to the Map, the set() method takes two arguments, the key and the value, and will return the Set object. The size() property returns the number of key/value pairs in the Map
*/

travelMap3.set('Brasil', 18);
console.log(travelMap3);
/*
Map(4) {
  'Thailand' => 24,
  'Vietnam' => 9,
  'Columbia' => 8,
  'Brasil' => 18
}
*/
console.log(travelMap3.size);
// 4

/*
Other useful methods include has() which returns a boolean indicating whether a key exists in the Map object or not.
*/

console.log(travelMap3.has('Asia'));
// false

// get() retrieves a value in the Map using its key.
console.log(travelMap3.get('Columbia'));
// 8

/*
delete() deletes the element passed in and returns the value that has() would have returned (true for a successful deletion). Using has() to check that since deleted element will result in a false.
*/

travelMap3.delete('Vietnam');
console.log(travelMap3);
// Map(3) { 'Thailand' => 24, 'Columbia' => 8, 'Brasil' => 18 }
console.log(travelMap3.has('Vietname'));
// false
console.log(travelMap3.size);
// 3

/*
You can iterate over key/value pairs in the Map directly using forEach() or a for..of loop.
*/

for (const i of travelMap3) {
  console.log(i);
}
// [ 'Thailand', 24 ]
// [ 'Columbia', 8 ]
// [ 'Brasil', 18 ]

for (let [key, value] of travelMap3) {
  console.log(`${key}: ${value}`);
}
// Thailand: 24
// Columbia: 8
// Brasil: 18

travelMap3.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Thailand: 24
// Columbia: 8
// Brasil: 18