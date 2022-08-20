// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

// function twoProps(obj) {
//   return obj.country;
// }
// console.log(twoProps({ country: 'Sweden', continent: 'Europe' }));

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'

// function propTwo(obj) {
//   return obj['prop-2'];
// }
// console.log(propTwo({ 'prop-2': 'two', prop: 'test' }));

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

// function truthyExists(a, b) {
//   if (b in a === true) {
//     return 'true';
//   }
//   return 'false';
// }
// console.log(truthyExists({ a: 1, b: 2, c: 3 }, 'b'));
// console.log(truthyExists({ x: 'a', y: 'b', z: 'c' }, 'a'));
// console.log(truthyExists({ x: 'a', y: 'b', z: undefined }, 'z'));

// let car = {
//   make: 'Ford',
//   model: 'Mustang',
// };
// function dumpProps(obj) {
//   let result = '';
//   for (const i in obj) {
//     result += `${obj[i]} `;
//   }
//   return result;
// }
// console.log(dumpProps(car));

// const myObj = {},
//   str = 'myString',
//   rand = Math.random(),
//   anotherObj = {};

// myObj.type = 'dot syntax for a key named type';
// myObj['date created'] = 'this key has a space';
// myObj.str = 'this key is in variable str';
// myObj[rand] = 'a random number is the key';
// myObj[anotherObj] = 'this key is object another object';
// myObj[''] = 'an empty string';

// console.log(myObj);

const anyObject = {};
anyObject.name = 'Jason';
anyObject['rand'] = Math.random();
anyObject['date'] = Date.UTC();

const objArr = [];
for (let key in anyObject) {
  objArr.push(`${key}: ${anyObject[key]}`);
}
console.log(objArr);
