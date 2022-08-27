// Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

let mostFrequent = (array) => {
  let maxValue = 0;
  let maxKey = '';
  let countObj = {};
  // iterate over the elements of the array
  for (let element of array) {
    // if the countObj variable has no elements present
    if (!countObj[element]) {
      // add the element to the count obj with a value of 1
      countObj[element] = 1;
    } else {
      // if the element already is in the obj, add 1 to the value
      countObj[element]++;
    }
    console.log(countObj);
    // if the value of the element is greater than zero
    if (countObj[element] > maxValue) {
      // max value is assigned to the current element
      maxKey = element;
      maxValue = countObj[element];
      console.log(maxKey, 'max key', maxValue, 'max value');
    }
  }
  return `${maxKey}: ( ${maxValue} times )`;
};

console.log(mostFrequent([3, 'a', 3, 'a', 2, 4, 9, 3, 'a', 'a', 'a', 2]));
