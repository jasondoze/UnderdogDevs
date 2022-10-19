/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), 
value2(number).

The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/


// eval evaluates the string values of operators, Warning: Executing JavaScript 
// from a string is an enormous security risk. It is far too easy for a bad actor 
// to run arbitrary code when you use eval(). 

const basicOp = (operation, value1, value2) => {
  return eval(value1 + operation + value2);
};

console.log(basicOp('+', 4, 7), '11');
console.log(basicOp('-', 15, 18), '-3');
console.log(basicOp('*', 5, 5), '25');
console.log(basicOp('/', 49, 7), '7');
