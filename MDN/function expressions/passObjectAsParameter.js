/*
Parameters are essentially passed to functions by value — so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, the change is not reflected globally or in the code which called that function.

When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:
*/

const myFunction = (theObject) => {
  theObject.make = 'toyota';
};

const myCar = {
  make: 'honda',
  model: 'accord',
  year: '1998',
};

// x returns a value of honda
const x = myCar.make;

// when my car is passed into my function
myFunction(myCar);

// myCar.make will be toyota
const y = myCar.make;

console.log(x, y);
// honda toyota

/*
When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:
*/

const myFunc = (theArr) => {
  theArr[0] = 30;
};

const arr = [45];
console.log(arr[0]);
// 45

myFunc(arr);
console.log(arr[0]);
// 30
