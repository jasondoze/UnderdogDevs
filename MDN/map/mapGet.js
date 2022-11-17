/*
The get() method returns a specified element from a Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.
*/

const map = new Map();
map.set('bar', 'foo');
console.log(map.get('bar'));
// foo
console.log(map.get('baz'));
// undefined

// Using get() to retrieve a reference to an object
const arr = [];
const myMap = new Map();
myMap.set('bar', arr);
myMap.get('bar').push('foo');
console.log(arr, myMap);
// [ 'foo' ] Map(1) { 'bar' => [ 'foo' ] }
console.log(myMap.get('bar'));
// [ 'foo' ]
