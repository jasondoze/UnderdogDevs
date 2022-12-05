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

console.log('---------------------');

// factory function
function robotFactory(model, mobile) {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
}
const tinCan = robotFactory("P-500", true);
console.log(tinCan);
tinCan.beep();
console.log(tinCan.model);

console.log('---------------------');


// property value shorthand
function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

console.log('---------------------');



// destructured assignment
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};

const { functionality } = robot;
functionality.beep();
