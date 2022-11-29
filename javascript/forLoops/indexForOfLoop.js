const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
for (const [index, element] of items.entries()) {
  console.log(`${index}: ${element}`);
}
/*
0: a
1: b
2: c
3: d
4: e
5: f
6: g
*/

const iterator1 = items.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
// [ 0, 'a' ]
// [ 1, 'b' ]