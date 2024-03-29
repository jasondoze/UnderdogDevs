/*
Callback function
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/

const logCall = function () {
  console.log('log call was called back');
};
// anonymous function
setTimeout(function () {
  console.log('the function was called back');
}, 4000);




// function greeting(name) {
//   alert(`Hello ${name}`);
// }
// function processUserInput(callback) {
//   const name = prompt('Enter thy name');
//   callback(name);
// }
// console.log(processUserInput(greeting));

