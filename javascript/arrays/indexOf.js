// Using the indexOf Method on an Array
// Let us consider the case of wanting to determine where in an array we can
// find a particular element
// We can do so using the .indexOf() method for string
var indexOfElement1 = ['a', 'b', 'c', 'd'].indexOf('c');
console.log('index where element is first found:', indexOfElement1);
// If the element is not present, the call to indexOf will return -1:

var indexOfElement2 = ['a', 'b', 'c', 'd'].indexOf('q');
console.log('index if element is not found:', indexOfElement2);
// We say "first found" in the last example, because we can also tell our call to indexOf that it should begin searching after a certain index:

var indexOfElement = [1, 2, 3, 1, 5, 9].indexOf(1, 2);
console.log('index where element is found after index 2:', indexOfElement);
// We can also do this with variables:

var ingredients = ['butter', 'sugar', 'flour', 'chocolate chips'];
var searchIngredient = 'flour';
var indexOfIngredient = ingredients.indexOf(searchIngredient);
console.log('index where ingredient is found:', indexOfIngredient);

// And again, if the element is not present, the call to indexOf will return -1:

var ingredients = ['butter', 'sugar', 'flour', 'chocolate chips'];
var searchIngredient = 'pecans';
var indexOfIngredientNotFound = ingredients.indexOf(searchIngredient);
console.log('index if ingredient is not found:', indexOfIngredientNotFound);
// Finally, we can again search for an element beginning after a certain index in an array:

var workOrders = [
  'installation',
  'repair',
  'SYSTEM RESET',
  'maintenance',
  'repair',
];
var indexOfSystemReset = workOrders.indexOf('SYSTEM RESET');
var indexOfFirstRepairAfterReset = workOrders.indexOf(
  'repair',
  indexOfSystemReset + 1
);
console.log(
  'index of first repair order after reset:',
  indexOfFirstRepairAfterReset
);
