/*
Rest parameter syntax. In this way, we can pass in any number 
of arguments into the function while keeping our code minimal. 
The rest parameter operator is used in function parameter lists 
with the format: ...variable and it will include within that variable 
the entire list of uncaptured arguments that the function was called with.
*/

function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
}

console.log(avg(2, 3, 4, 5)); // 3.5

/* 
But it would be nice to be able to reuse the function that we've already created. 
Luckily, JavaScript lets you call a function with an arbitrary array of arguments, 
using the apply() method of any function object.
*/

console.log(avg.apply(null, [2, 3, 4, 5])); // 3.5

/*
Remember how avg.apply() had a null first argument? We can revisit that now. 
The first argument to apply() is the object that should be treated as 'this'. 
For example, here's a trivial implementation of new:
*/

function trivialNew(constructor, ...args) {
  const obj = {};
  constructor.apply(obj, args);
  return obj;
}
console.log(trivialNew());
// undefined

/*
This isn't an exact replica of new as it doesn't set up the prototype chain 
(it would be difficult to illustrate). This is not something you use very often, 
but it's useful to know about. In this snippet, ...args (including the ellipsis) 
is called the "rest arguments" — as the name implies, this contains the rest of 
the arguments.
*/
const bill = trivialNew(Person, ' William', 'Orange');
