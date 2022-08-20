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
