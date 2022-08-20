// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object
function myFunction(a) {
  let myObj = {
    key: 1,
  };
  myObj.key = a;
  return myObj;
}
console.log(myFunction('z'));


