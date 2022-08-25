/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */
const intersectionArrayElements = (...arrays) => {
  let setArray = [];
  for (let innerArrays of arrays) {
    let innerSets = new Set(innerArrays);
    setArray.push(innerSets);
  }
  for (let set of setArray) {
    console.log(setArray[set]);
  }
  // }
  return setArray;
};
// const arr1 = [1, 2];
// const arr2 = [2, 3];
// const arr3 = ['a', 'b'];
// const arr4 = ['b', 'c'];
// const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
// console.log(intersection(arr1, arr2)) // [2]
// console.log(intersection(arr3, arr4, arr5)); // ['b']
console.log(intersectionArrayElements(arr6, arr7, arr8)); // ['b', 'e']
