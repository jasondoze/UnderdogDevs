function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}
new Map([
  ['foo', 3],
  ['bar', {}],
  ['baz', undefined],
]).forEach(logMapElements);

/*
m[foo] = 3
m[bar] = [object Object]
m[baz] = undefined
*/

function logMapElements2(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}
new Map([
  ['foo', 3],
  ['bar', {}],
  ['baz', undefined],
]).forEach(logMapElements2);

/*
map.get('foo') = 3
map.get('bar') = [object Object]
map.get('baz') = undefined
*/
