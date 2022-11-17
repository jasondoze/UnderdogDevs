/*
Map.prototype.values()
The values() method returns a new iterator object that contains the values for each element in the Map object in insertion order.
*/

const map = new Map();
map.set('1', 'monkey');
map.set('2', 'brains');

const iterator = map.values();
console.log(iterator);
// [Map Iterator] { 'monkey', 'brains' }

console.log(iterator.next().value);
// monkey

console.log(iterator.next().value);
// brains

map.clear();
console.log(map);
// Map(0) {}
map.delete();
console.log(map);
// Map(0) {}
