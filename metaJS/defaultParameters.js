// // default params

// class WithDefaultParams {
//   constructor(num1 = 1, num2 = 2, num3 = 3, string1 = 'Result:', bool1 = true) {
//     this.num1 = num1;
//     this.num2 = num2;
//     this.num3 = num3;
//     this.string1 = string1;
//     this.bool1 = bool1;
//   }
//   calculate() {
//     if (this.bool1) {
//       console.log(this.string1, this.num1 + this.num2 + this.num3);
//       return;
//     }
//     return 'The value of bool1 is incorrect';
//   }
// }
// var better = new WithDefaultParams();
// // better.calculate(); // Result: 6

// designing OOP program
class Animal {
  constructor(color = 'yellow', energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log('energy is decreasing, currently at: ', this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log('energy is increasing, current at: ', this.energy);
  }
  getColor() {
    console.log(this.color);
  }
}

class Cat extends Animal {
  constructor(
    sound = 'purr',
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = 'meow',
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = 'roar',
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log('im a talking parrot');
    }
  }
}

const polly = new Parrot(true);
const fiji = new Parrot(false);

// fiji.makeSound(); // undefined
// fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

console.log(polly.color); // yellow
console.log(polly.energy); // 100

polly.isActive(); // energy is decreasing, currently at:  80

const penguin = new Bird('shriek', false, 'black and white', 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

console.log(penguin.sound); // shriek
console.log(penguin.canFly); // false
console.log(penguin.color); // black and white
console.log(penguin.energy); // 200
penguin.isActive(); // energy is decreasing, currently at:  180

const leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

const tyson = new Tiger();

tyson.makeSound(false); // roar
tyson.makeSound(true); // purr, roar
