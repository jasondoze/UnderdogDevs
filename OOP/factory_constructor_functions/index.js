// object literal
// if an object have one or more methods, its said to have behavior
const circlez = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log('draw');
  },
};

circlez.draw();
// circle.constructor
// ƒ Object() { [native code] }

console.log('---------------------');

// factory function
function createCircle(radius) {
  // if key and value are the same, we can remove the value
  return {
    radius,
    draw: function () {
      console.log('drawz');
    },
  };
}

const circle = createCircle(1);
circle.draw();

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