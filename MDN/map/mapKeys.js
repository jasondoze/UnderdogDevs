/*
Map.prototype.keys()
The keys() method returns a new iterator object that contains the keys for each element in the Map object in insertion order. In this particular case, this iterator object is also an iterable, so a for...of loop can be used.
*/

const map = new Map();
map.set('0', 'good');
map.set('1', 'food');

const iterator = map.keys();
console.log(iterator);
// [Map Iterator] { '0', '1' }
console.log(iterator.next().value);
// 0
console.log(iterator.next().value);
// 1