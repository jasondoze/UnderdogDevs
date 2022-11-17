const map = new Map();
map.set('a', 'alpha');
map.set('b', 'beta');
map.set('g', 'gamma');

console.log(map);
// Map(3) { 'a' => 'alpha', 'b' => 'beta', 'g' => 'gamma' }
// size()
console.log(map.size);
// 3

// clear()
map.clear();
console.log(map);
// Map(0) {}
console.log(map.size);
// 0

const map2 = new Map();
map2.set('a', 'alpha');
map2.set('b', 'beta');
map2.set('g', 'gamma');
map2.delete('b');

console.log(map2);
// Map(2) { 'a' => 'alpha', 'g' => 'gamma' }
map2.delete('alpha');
console.log(map2);
map2.set('b', 'beta');
console.log(map2);
