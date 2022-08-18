/*
Closures
This leads us to one of the most powerful abstractions that JavaScript 
has to offer — but also the most potentially confusing. What does this do?
*/

function makeAdder(a) {
  return function (b) {
    return a + b;
  };
}
const add5 = makeAdder(5);
const add20 = makeAdder(20);
console.log(add5(6)); // 11
console.log(add20(7)); //27
