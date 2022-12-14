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

function map(array, callbackFunction) {
  // Create a new array to hold the mapped values
  const mappedValues = [];

  // Loop through the array and apply the callbackFunction to each element
  for (let i = 0; i < array.length; i++) {
    // Apply the callbackFunction to the current element and add the result to the mappedValues array
    mappedValues.push(callbackFunction(array[i]));
  }

  // Return the mappedValues array
  return mappedValues;
}

// Log the result of calling the map function with an array and a callback function
console.log(
  map([1, 2, 3], function (x) {
    return x * x;
  })
); // [1, 4, 9]

/*
Build Filter
We are going to complete a function called filter. It should behave similarly to the native array method of the same name from the previous lesson. However, your implementation should not use Array.prototype.filter, i.e. should not look like this:

function filter(array, callbackFunction) {
  return array.filter(callbackFunction);
}
Here is an example to get a sense of what filter should do.

var input = [1, 2, 3, 4];
var output = filter(input, function(value) {
  return value % 2 === 0;
})

console.log(output); // [2, 4]
*/

function filter(array, callbackFunction) {
  // Create a new array to hold the filtered values
  const filteredValues = [];

  // Loop through the array and apply the callbackFunction to each element
  for (let i = 0; i < array.length; i++) {
    // If the callbackFunction returns true for the current element, add it to the filteredValues array
    if (callbackFunction(array[i])) {
      filteredValues.push(array[i]);
    }
  }

  // Return the filteredValues array
  return filteredValues;
}

// Log the result of calling the filter function with an array and a callback function
console.log(
  filter([1, 2, 3, 4, 5], function (x) {
    return x % 2 === 0;
  })
); // [2, 4]

/*
Build Reduce
We are going to complete a function called reduce. It should behave similarly to the native array method of the same name from the previous lesson. However, your implementation should not use Array.prototype.reduce, i.e. should not look like this:

function reduce(array, callbackFunction, startingValue) {
  return array.reduce(callbackFunction, startingValue);
}
Here is an example to get a sense of what reduce should do.

var input = [1, 2, 3, 4];
var output = reduce(input, function(sum, value) {
  return sum + value;
}, 0)

console.log(output); // 10

function reduce(array, callbackFunction, startingValue) {
  // your code here
}
*/

function reduce(array, callbackFunction, startingValue) {
  // Create a variable to store the current value
  let currentValue = startingValue;

  // Loop through the array and apply the callbackFunction to each element
  for (let i = 0; i < array.length; i++) {
    // Update the current value by calling the callbackFunction with the current value and the current element
    currentValue = callbackFunction(currentValue, array[i]);
  }

  // Return the final value
  return currentValue;
}

// Log the result of calling the reduce function with an array, a callback function, and a starting value
console.log(
  reduce(
    [1, 2, 3, 4, 5],
    function (acc, cur) {
      return acc + cur;
    },
    0
  )
); // 15

/*
This reduce function works similarly to the built-in Array.prototype.reduce method. It takes an array, a callback function, and an optional starting value, and applies the callback function to each element in the array to reduce the array to a single value. The callback function should take two arguments: an "accumulator" value and the current element, and should return a new accumulator value. The reduce function returns the final accumulator value.
*/

function multiply(...args) {
  if (args == 0) {
    return 0;
  }
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
}
console.log(multiply(1, 2, 3, 4)); // 24
