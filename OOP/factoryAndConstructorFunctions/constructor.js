// constructor function
function Circle(radius) {
  console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('paint');
  };
}
// Circle.constructor
// ƒ Function() { [native code] }



// the new operator will create a new object {}
// by default, this will point to the that object
const circular = new Circle(1);
/*
circular.constructor
ƒ Circle(radius) {
  console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('paint');
  };
}
*/

let x = {}
// let x = new Object()

new String(); // '', "", ``  string literals
new Boolean(); // true, false  boolean literals
new Number(); // 1, 2, 3, 4    number literals

// every object has a constructor property that references the function that was used to create that object