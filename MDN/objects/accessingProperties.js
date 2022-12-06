const myObj = {};
const str = 'myString';
const rand = Math.random();
const anotherObj = {};

console.log(myObj);
myObj.type = 'dot syntax for a key named type';
myObj['created at'] = 'this key has a space';
myObj[str] = 'this key is in variable str';
myObj[rand] = 'random number is the key here';
myObj[anotherObj] = 'this key is another object';
myObj[''] = 'this key is an empty string';

console.log(myObj);
console.log(myObj.myString);

const myCar = {};
let propertyName = 'make';
myCar[propertyName] = 'Ford';
console.log(myCar);
