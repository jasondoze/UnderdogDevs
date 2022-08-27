// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.

let print2d = (array) => {
  for (let i = 0; i < array.length; i++) {
    let row = array[i];
    for (let j = 0; j < row.length; j++) {
      let char = row[j];
      console.log(char);
    }
  }
};

let array1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i'],
];
print2d(array1);
// prints
//  a
//  b
//  c
//  d
//  e
//  f
//  g
//  h
//  i

let array2 = [[9, 3, 4], [11], [42, 100]];
print2d(array2);
// prints
//  9
//  3
//  4
//  11
//  42
//  100
