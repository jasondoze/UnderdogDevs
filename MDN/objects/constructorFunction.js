// using a constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const ride = new Car('Bugatti', 'Veyron', 2022);

// console.log(ride);

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

// and then instantiate two new Person objects as follows:

const keanu = new Person('Totes McGotes', 33, 'M');
const miko = new Person('Susie Banshee', 28, 'F');

// you can rewrite the definition of Car to include an owner property that takes a Person object, as follows:

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

// To instantiate the new objects, you then use the following:

const newRide = new Car('Bugatti', 'Veyron', 2022, keanu);
const nextRide = new Car('Nissan', '300ZX', 1992, miko);

console.log(newRide);
console.log(nextRide);
// console.log(newRide.owner.name);

newRide.color = 'black';
console.log(newRide);

/*
Methods are typically defined on the prototype object of the constructor, so that all objects of the same type share the same method. For example, you can define a function that formats and displays the properties of the previously-defined Car objects.
*/
Car.prototype.displayCar = function () {
  const result = `a beauty ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};
newRide.displayCar();
nextRide.displayCar();
console.log(newRide, 'new ride');

console.log('-----------------');

/*
Using the Object.create() method
Objects can also be created using the Object.create() method. This method can be very useful, because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.
*/

// Animal properties and method encapsulation
const Animal = {
  type: 'Invertebrates',
  displayType() {
    // method which will display animal type
    console.log(this.type);
  },
};

// create new animal type called animal
const animal = Object.create(Animal);
animal.displayType(); // Invertebrates

// create new animal type called fish
const fish = Object.create(Animal);
fish.type = 'Salmon';
fish.displayType(); // Salmon
console.log('-----------------');
console.log(animal);
console.log(fish);

console.log('-----------------');

/*
You can use the bracket notation with for...in to iterate over all the enumerable properties of an object. To illustrate how this works, the following function displays the properties of the object when you pass the object and the object's name as arguments to the function:
*/

function showProps(obj, objName) {
  let result = '';
  for (const i in obj) {
    // Object.hasOwn() is used to exclude properties from the object's
    // prototype chain and only show "own properties"
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}
