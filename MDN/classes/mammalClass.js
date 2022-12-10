
class Mammal {
  constructor(type, breed, color) {
    this.type = type;
    this.breed = breed;
    this.color = color;
  }
  call() {
    console.log(`come over here my little ${this.color} ${this.type} broski`);
  }
}

// child class
class Dog extends Mammal {
  call() {
    super.call();
    console.log(`this ${this.color} ${this.type} is irritating`);
  }
  bark() {
    console.log(`this ${this.color} ${this.breed} ${this.type} barks alot`);
  }
}

class Cat extends Mammal {
  call() {
    super.call();
    console.log(`this ${this.color} ${this.type} is not supposed to bark`);
  }
  scratch() {
    console.log(
      `when the ${this.type} scratches the furniture, the claws get clipped`
    );
  }
}

// what if I dont want to pass this arguement
const newDoggo = new Dog('dog', '', 'brown');
newDoggo.call();
newDoggo.bark();

const doggo = new Dog('dog', 'sheppard', 'black');
doggo.call();
doggo.bark();

const monkey = new Mammal('monkey', 'australiopithicus', "orange");
monkey.call();
const dinosaur = new Mammal('velociraptor', 'V. mongoliensis', 'yellow');

const alleyKat = new Cat('cat', 'feral', 'white');
alleyKat.call();
alleyKat.scratch();
