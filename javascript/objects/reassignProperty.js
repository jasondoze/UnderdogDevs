/*
We are going to complete a function that takes three parameters, an object, 
a string key, and a newValue, and returns the object after performing a reassignment. 
Your function should reassign the property's value within the object, 
located at the string key, to the newValue parameter, and should then return 
the newly changed object. Below is an example of the code running, assuming 
that you will have completed the described function: reassignAProperty.
*/

let reassignAProperty = (obj, str, value) => {
  obj[str] = value;
  return obj;
};
var resultObject = reassignAProperty(
  { name: 'Ramses', favoriteFood: 'chicken', type: 'dog' },
  'favoriteFood',
  'goose'
);
console.log(resultObject);

