/*
Map.prototype.set()
The set() method adds or updates an entry in a Map object with a specified key and a value.
*/

const map = new Map();
map.set('monkey', 'brains');

console.log(map);
// Map(1) { 'monkey' => 'brains' }

console.log(map.get('monkey'));
// brains
console.log(map.get('brains'));
// undefined