let cars = [
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2017-01-03'),
    capacity: 7,
  },
  {
    color: 'red',
    type: 'cabrio',
    registration: new Date('2016-05-02'),
    capacity: 2,
  },
  {
    color: 'red',
    type: 'station wagon',
    registration: new Date('2018-03-03'),
    capacity: 5,
  },
];

// let car = {
//   color: 'red',
//   type: 'cabrio',
//   registration: new Date('2016-05-02'),
//   capacity: 2,
// };
// cars.unshift(car);
// console.log(cars);

// cars.push(car);
// console.log(cars);

// Array.splice(
//   {index where to start},
//   {how many items to remove},
//   {items to add}
// );

// cars.splice(1, 0, car);
// console.log(cars);

// let car = cars.find((car) => car.color === 'red');
// console.log(car);

// let car = cars.find(
//   (car) => car.color === 'red' && car.type === 'station wagon'
// );
// console.log(car);

// let redCars = cars.filter((car) => car.color === 'red');
// console.log(redCars);

// let sizes = cars.map((car) => {
//   if (car.capacity <= 3) {
//     return 'small';
//   }
//   if (car.capacity <= 5) {
//     return 'medium';
//   }
//   return 'large';
// });
// console.log(sizes);
const menu = {  burger: 10,  fries: 3,  coleslaw: 4,  coke: 2,  beer: 5};

