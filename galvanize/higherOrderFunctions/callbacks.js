// function greeting(name) {
//   alert(`Hello, ${name}`);
// }
// function processUserInput(callback) {
//   const name = prompt('Please enter your name');
//   callback(name);
// }
// processUserInput(greeting);

// console.log('---------*---------');

/* callback functions
In the code snippet below there are two functions: cbFunction and caller. You need to invoke cbFunction from inside caller, passing forward the arguments and return that result. Yes, this example is a little mechanical, but we will see many practical applications of this soon!
*/

function cbFunction(x, y, z) {
  return x + y + z;
}
function caller(x, y, z, cbFunction) {
  console.log('In caller function');
  return cbFunction(x, y, z);
}
let x = caller(1, 2, 3, cbFunction);
console.log(x);
// 6

console.log('---------*---------');

/*
Creating native array methods from scratch
The built-in native array methods are incredibly useful but they're not magic -- they're built using JavaScript as well! In order to master higher order functions you'll want to be able to create your own functions that dynamically use callbacks to analyze and modify data.

For example, take a look at the following snippet of code:
*/

function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }

  return arr;
}

forEach(['one', 'two', 'three'], function (val, index, arr) {
  console.log(val, index, arr);
});

console.log('---------*---------');

/*
Build Map

We are going to complete a function called map. It should behave similarly to the native array method of the same name from the previous lesson. However, your implementation should not use Array.prototype.map, i.e. should not look like this:

function map(array, callbackFunction) {
  return array.map(callbackFunction);
}
Here is an example to get a sense of what map should do.

var input = [1, 2, 3, 4];
var output = map(input, function(value) {
  return value + 1;
})

console.log(output); // [2, 3, 4, 5]
*/
console.log('---------*---------');

// default parameters
function constructPerson(name = 'Anonymous', age = 0, hobbies = []) {
  const person = {
    name: name,
    age: age,
    hobbies: hobbies,
  };

  return person;
}
console.log(constructPerson());

console.log('---------*---------');

function multiply(...theArgs) {
  let product = 1;
  if (theArgs.length < 1) {
    return 0;
  } else {
    for (let i of theArgs) {
      product *= i;
    }
  }
  return product;
}
console.log(multiply(1, 2, 3, 4)); // 24
