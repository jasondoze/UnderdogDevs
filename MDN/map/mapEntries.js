const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

console.log(map1.entries());
// [Map Entries] { [ '0', 'foo' ], [ 1, 'bar' ] }

const iterator = map1.entries();

console.log(iterator.next().value);
[ '0', 'foo' ]
console.log(iterator.next().value);
[ 1, 'bar' ]

for (const i of map1) {
  console.log(i);
}
/*
[ '0', 'foo' ]
[ 1, 'bar' ]
*/
