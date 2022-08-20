/*
Array find from last
In JavaScript we already have an Array.prototype.find and
Array.prototype.findIndex to find an element or index of the
element. But it searcesh from first element of the array. If in some
situations we may need to search from the last. So for that either we have
to use reverse0 and write additional logic. before ES13
*/

const data = [
  { value: 'a' },
  { value: 'b' },
  { value: 'b' },
  { value: 'c' },
  { value: 'd' },
];

console.log(data.find((item) => item.value === 'b'));
console.log(data.findIndex((item) => item.value === 'b'));

/*
but we can increase the performance by using findLast0 and
findLastIndex0 methods to search the array from the end.
*/

const data2 = [
  { value: 'a' },
  { value: 'b' },
  { value: 'b' },
  { value: 'c' },
  { value: 'b' },
];
console.log(data2.findLast((item) => item.value === 'b'));
console.log(data2.findLastIndex((item) => item.value === 'b'));
