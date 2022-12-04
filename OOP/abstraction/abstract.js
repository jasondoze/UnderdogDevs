function Circle(radius) {
  this.radius = radius;
  // we cannot access this default location from outside the function
  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    console.log('draw');
  };
  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    // set: function (value) {
    //   defaultLocation = value;
    // },
  });
}
const circle = new Circle(10);
circle.draw();
