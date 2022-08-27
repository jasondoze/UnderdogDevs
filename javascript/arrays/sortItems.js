// Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

let sortItem = (array) => {
  array.sort((a, b) => a -b);
  return array;
};
console.log(sortItem([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));
