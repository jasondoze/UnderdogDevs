// Destructuring Arrays
/*
Destructuring is a JavaScript expression that makes it possible to unpack 
values from arrays, or properties from objects, into distinct variables. 
That is, we can extract data from arrays and objects and assign them to variables
*/

const book = [
  'Doubt',
  'Jennifer Michael Hecht',
  '2003',
  ['Socrates', 'Stoics', 'Skeptics'],
];

// let title = book[0];
// let author = book[1];
// let year = book[2]

// console.log(title, author, year);

// Array destructuring
let [title, author, year, [a, b, c]] = book;
console.log(title, author, year);
console.log(a, b, c);
