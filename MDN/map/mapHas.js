// The has() method returns a boolean indicating whether an element with the specified key exists or not.

const map = new Map();
map.set('bar', 'foo');
console.log(map);
// Map(1) { 'bar' => 'foo' }
console.log(map.has('bar'));
// true
console.log(map.has('baz'));
// false