function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}
const circle = new Circle(10);

for (let key in circle) {
  if (typeof circle[key] !== 'function') console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

// if an object has a given property or method
if ('radius' in circle) {
  console.log('Circle has a radius');
}

// circle.location = { x: 1 };

// const propertyName = 'location';
// circle[propertyName] = { x: 1 };
