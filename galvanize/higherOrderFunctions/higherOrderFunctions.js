function hello() {
  console.log('howdie');
}
console.log(hello);
// [Function: hello]
console.log(hello.name);
// hello

hello.language = 'English';
console.log(hello);
// [Function: hello] { language: 'English' }

("This doesn't throw an error because the function declaration is read first before the code begins to execute.");

hello();

function hello() {
  console.log('Hello');
}
// Hello

var logNum = function () {
  console.log(1);
};
logNum();
// 1
console.log(logNum.name);
// logNum

console.log('------------------');
logNum();
var logNum = function () {
  console.log(1);
};

console.log('---------*---------');

function logText(func) {
  func();
}
logText(function () {
  console.log('Functions are first-class in JavaScript!');
});
// Functions are first-class in JavaScript!

console.log('---------*---------');

// accepts a function as an argument
function higherOrder(done) {
  done();
}

higherOrder(function () {
  // this function becomes done()
});

// returns a function
function higherOrder() {
  return function () {
    // this function is returned
    console.log('Im a returned function');
  };
}


// the returned function, used as an expression (currying)
let returnedFunction = higherOrder();
// the returned function, saved in a value (generator)
returnedFunction();
// the returned function, used as an expression (currying)
higherOrder()();
