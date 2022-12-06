// Date is a built-in class of JavaScript

const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
console.log(Date.now());
if (bigDay.getTime() < Date.now()) {
  console.log('Once upon a time...');
}

console.log('-----------------------------');

class MyClass {
  // constructor
  constructor() {
    // constructor body
  }
  // instance field
  myField = 'foo';
  // instance method
  myMethod() {
    // myMethod body
  }
  // static field
  static myStaticMethod = 'bar';
  // static block
  static {
    // static intitialization code
  }
  // fields, methods, static fields, and static methods all have 'private' forms
  #myPrivateField = 'bar';
}

// Constructing a class
// After a class has been declared, you can create instances of it using the new operator.
const myInstance = new MyClass();
console.log(myInstance.myField);
myInstance.myMethod();

console.log('-----------------------------');

class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
    this.values = [r, g, b];
  }
}
const red = new Color(255, 0, 0);
console.log(red);
// Color { values: [ 255, 0, 0 ] }

// You have successfully created a Color instance, and the instance has a values property, which is an array of the RGB values you passed in. That is pretty much equivalent to the following:

function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}

console.log('-----------------------------');

class Colorz {
  constructor(...values) {
    this.values = values;
  }
}
const reds = new Colorz(255, 0, 0);

console.log(reds);

console.log('-----------------------------');

class Colorez {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
  // Similarly, we can create a new method called setRed, which sets the red value of the color.
  setRed(value) {
    this.values[0] = value;
  }
}
const redz = new Colorez(255, 0, 0);
redz.setRed(0);

console.log(redz.getRed());
// 0; of course, it should be called "black" at this stage!
