// inheritance
const bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

const eagle1 = Object.create(bird);
// console.log(eagle1.hasWings);
// console.log(eagle1.canFly);
// console.log(eagle1.hasFeathers);

const eagle2 = Object.create(bird);
// console.log(eagle2.hasFeathers);

const penguin1 = Object.create(bird);
// override inherent properties
penguin1.canFly = false;
// console.log(penguin1);
// console.log(penguin1.canFly);
// console.log(penguin1.hasFeathers);

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log('Lights on?', this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    let proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

const firstTrain = new Train('red', false);
// console.log(firstTrain);
// Train { color: 'red', lightsOn: false }

const train2 = new Train('blue', false);
// console.log(train2);
// Train { color: 'blue', lightsOn: false }

// train2.toggleLights(); // undefined
// train2.lightsStatus(); // Lights on? true
// train2.getSelf(); // Train { color: 'blue', lightsOn: true }
// train2.getPrototype(); // // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    // super is used to specify what property gets inherited from the super-class in the sub-class.
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('high speed status: ', this.highSpeedOn);
  }
  // want to implement it a bit differently in the sub-class? you can add it inside the HighSpeedTrain class.
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log('lights are 100% operational');
  }
}

const train5 = new Train('blue', false);
const highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// train5.toggleLights(); // toggle the status of the lights
// train5.lightsStatus(); // Lights on? true
// highSpeed1.toggleLights(); // Lights on? true, lights are 100% operational
// train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
// highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}

// Using class instance as another class' constructor's property
class StationaryBike {
  constructor(position, gears) {
    this.position = position;
    this.gears = gears;
  }
}

class Treadmill {
  constructor(position, modes) {
    this.position = position;
    this.modes = modes;
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs;
    this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
    this.treadmill = new Treadmill(treadmillPos, 5);
  }
}
const boxingGym = new Gym('7-22', 'right corner', 'left corner');
console.log(boxingGym.openHrs); // 7-22
console.log(boxingGym.stationaryBike); // StationaryBike { position: 'right corner', gears: 8 }
console.log(boxingGym.treadmill); // Treadmill { position: 'left corner', modes: 5 }
