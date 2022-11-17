/*
new operator
The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

Description
When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. 

Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).
If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. 

Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)
Classes can only be instantiated with the new operator — attempting to call a class without new will throw a TypeError.

Creating an object with a user-defined constructor function requires two steps:

Define the object type by writing a function that specifies its name and properties. For example, a constructor function to create an object Foo might look like this:
function Foo(bar1, bar2) {
  this.bar1 = bar1;
  this.bar2 = bar2;
}
Copy to Clipboard
Create an instance of the object with new.
const myFoo = new Foo('Bar 1', 2021);

*/

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon', 1990);
console.log(Car);
console.log(car1);
console.log(car1.year);

/*
Object type and object instance
Suppose you want to create an object type for cars. You want this type of object to be called Car, and you want it to have properties for make, model, and year. To do this, you would write the following function:
*/

function Car2(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
// You can create any number of car objects by calls to new. For example:
const myCar = new Car2('Eagle', 'Talon', 1990);
const herCar = new Car2('Toyota', 'Prius', 2014);
console.log(myCar.make);

/*
Object property that is itself another object
Suppose you define an object called Person as follows:
*/

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
// And then instantiate two new Person objects as follows:

const chad = new Person('aaron', 28, 'M');
const ronny = new Person('layne', 56, 'M');

// Then you can rewrite the definition of Car to include an owner property that takes a Person object, as follows:

function Car3(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

// To instantiate the new objects, you then use the following:

const carz = new Car3('Eagle', 'Talon', 1990, chad);
const carz2 = new Car3('Toyota', 'Prius', 2014, ronny);

/*
Instead of passing a literal string or integer value when creating the new objects, the above statements pass the objects rand and ken as the parameters for the owners. To find out the name of the owner of car2, you can access the following property:
*/

console.log(carz.owner.name, carz.owner.age);
