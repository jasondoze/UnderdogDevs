/*
Adding an Element in General (.splice (a))
Let us consider the case of wanting to add an element, without replacing anything, 
to an existing array. Let us further consider that we do not want to add the 
element to the back or the front, as we have done thus far. We can do so using 
the .splice() method:
*/

var array = [1, 2, 4];
array.splice(2, 0, 3); // .splice(index, # of elements to delete, # of elements to add)
console.log('array with newly added element:', array);

var alphabeticallyOrderedItems = ['Bacon', 'Eggs', 'Yogurt'];
var newItem = 'Sausage';
var indexOfNewItem = 2;

alphabeticallyOrderedItems.splice(indexOfNewItem, 0, newItem);
console.log(
  'list of alphabetically ordered items with new item added:',
  alphabeticallyOrderedItems
);
