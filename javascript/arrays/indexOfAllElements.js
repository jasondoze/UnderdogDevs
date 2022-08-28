const indeces = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
const newElement = 'z';

let allElements = (arr, char) => {
  let index = arr.indexOf(char);
  while (index !== -1) {
    indeces.push(`${char} is located at: ${index}`);
    index = arr.indexOf(char, index + 1);
  }
  return indeces;
};

console.log(allElements(array, element));

// const moreElements = (arr1, char1) => {
//   console.log(char1);
//   if (arr1.indexOf(char1) === -1) {
//     arr1.push(char1);
//     console.log(`New character in array is: ${char1}`);
//   } else {
//     console.log(`${char1} already exists in the array`);
//   }
// };

// console.log(moreElements(allElements(array, newElement)));
