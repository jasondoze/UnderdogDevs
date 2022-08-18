/*
Inner functions
JavaScript function declarations are allowed inside other functions. 
We've seen this once before, with an earlier makePerson() function. 
An important detail of nested functions in JavaScript is that they can 
access variables in their parent function's scope:
*/

function parentFunc() {
  const a = 1;

  function nestedFunc() {
    // parentFunc cant use this
    const b = 4;
    return a + b;
  }
  return nestedFunc();
}
console.log(parentFunc());

/*
This provides a great deal of utility in writing more maintainable code. 
If a called function relies on one or two other functions that are not useful 
to any other part of your code, you can nest those utility functions inside it. 
This keeps the number of functions that are in the global scope down, which is 
always a good thing.

This is also a great counter to the lure of global variables. When writing complex 
code it is often tempting to use global variables to share values between multiple 
functions — which leads to code that is hard to maintain. Nested functions can share 
variables in their parent, so you can use that mechanism to couple functions together 
when it makes sense without polluting your global namespace — "local globals" if you 
like. This technique should be used with caution, but it's a useful ability to have.
*/