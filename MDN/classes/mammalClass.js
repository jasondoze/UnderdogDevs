class Mammal {
  constructor(type, breed, color) {
    this.type = type;
    this.breed = breed;
    this.color = color;
  }
  sleep() {
    console.log(
      `good night little ${this.color} ${this.type} ${this.breed} zzzzzz`
    );
  }
}

// child class
class Dog extends Mammal {
  constructor(name, breed, color, size) {
    super('dog', breed, color);
    this.name = name;
    // this.type = 'wolf';
    this.size = size;
    console.log(
      `New ${this.name} ${this.color} ${this.type} ${this.size} ${this.breed} is created`
    );
  }
  bark() {
    console.log(
      `this ${this.color} ${this.breed} ${this.type} ${this.size} barks alot-----`
    );
  }
}

// class Cat extends Mammal {
//   constructor(type, breed, color, size, meow) {
//     super();
//     console.log(`this ${this.color} ${this.type} is not supposed to bark`);
//   }
//   scratch() {
//     console.log(
//       `when the ${this.type} scratches the furniture, the claws get clipped`
//     );
//   }
// }

// what if I dont want to pass this arguement
const newDoggo = new Dog('scoob', 'dog', 'sheppard', 'brown', 'large');
// newDoggo.call();
newDoggo.bark();

// const doggo = new Dog('dog', 'sheppard', 'black');
// doggo.call();
// doggo.bark();

// const monkey = new Mammal('monkey', 'australiopithicus', 'orange');
// monkey.call();
// const dinosaur = new Mammal('velociraptor', 'V. mongoliensis', 'yellow');

// const alleyKat = new Cat('cat', 'feral', 'white');
// alleyKat.call();
// alleyKat.scratch();
