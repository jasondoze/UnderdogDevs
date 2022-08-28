// Adding the contents of an Array to another Array
// Let us consider the case of wanting to add the contents 
// of one array to another array
// Let us further consider that we do not wish to affect either original array
// We can do so using the .concat() method
var array1 = [1, 2, 3];
var array2 = ['a', 'b', 'c'];
var array3 = ['do', 're', 'mi'];

var resultOfConcat1 = array1.concat(array2);
console.log('concatting array1 and array2 together:', resultOfConcat1);
console.log('-------------------------\n');
console.log('array1 is unaffected:', array1);
console.log('array2 is unaffected:', array2);

console.log('-------------------------\n');

var resultOfConcat2 = resultOfConcat1.concat(array3);
console.log('concatting array3 into our previous result:', resultOfConcat2);
console.log('-------------------------\n');
console.log('array1 is unaffected:', array1);
console.log('array2 is unaffected:', array2);
console.log('array3 is unaffected:', array3);
console.log('resultOfConcat1 is unaffected:', resultOfConcat1);

console.log('-------------------------\n');

var resultOfConcat3 = array1.concat(array2, array3);
console.log('concatting multiple arrays:', resultOfConcat3);

// We can also do this with variables:

var breakfastItems = ['bacon', 'eggs', 'coffee', 'pancakes'];
var lunchItems = ['falafel', 'gyro', 'pad thai', 'sandwich'];
var dinnerItems = ['skirt steak', 'pork chops', 'lasagne', 'lamb shank'];

var brunchItems = breakfastItems.concat(lunchItems);
console.log('items for brunch:', brunchItems);

var happyHourItems = lunchItems.concat(dinnerItems);
console.log('items for happy hour:', happyHourItems);

var entireMenu = breakfastItems.concat(lunchItems, dinnerItems);
console.log('entire menu of items:', entireMenu);