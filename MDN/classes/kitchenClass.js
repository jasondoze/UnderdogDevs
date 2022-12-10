class Room {
  constructor(name, floor) {
    this.name = name;
    this.floor = floor;
  }
}
class Kitchen extends Room {
  constructor(name, floor) {
    super(name, floor);
  }
  cook() {
    console.log('sizzle');
  }
}
class Bedroom extends Room {
  constructor(name, floor) {
    super(name, floor);
  }
  sleep() {
    console.log('zzzzzz');
  }
}

const kitchen = new Kitchen('kitchen', 'tile');
kitchen.cook();

const bedroom = new Bedroom('bedroom', 'carpet');
bedroom.sleep();
