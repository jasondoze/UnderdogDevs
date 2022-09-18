// Return only unique values
// In this JavaScript array exercise, the supplied array may contain duplicate
// values. Write a function to return only unique values — values that only occur
// exactly one time within the provided array.

// english version, go over the numbers twice and evaluate which numbers only appear
// one time

// const onlyUnique = (someArray) => {
//   // create a unique array variable
//   // iterate over the length of the array
//   // if the element in the array only appears once
//   // if the element is not present within any other index of the length of the
//   // array
//   // push it into the unique array
//   let unique = [];
//   for (let i = 0; i < someArray.length; i++) {
//     let firstIndex = someArray[i];
//     // console.log('i', someArray[i])
//     for (let j = 0; j < someArray.length; j++) {
//       let currIndex = someArray[j];
//       //   console.log(firstIndex, currIndex);
//       // currIndex = firstIndex;
//       if (firstIndex === currIndex) {
//         // someArray.splice(firstIndex);
//         // firstIndex = someArray[i + 1]
//         console.log(firstIndex, currIndex);
//       }
//       //   console.log(firstIndex, currIndex);
//       //   console.log(someArray);
//     }
//     // console.log(firstIndex, currIndex);
//     // }
//   }
//   //   return someArray;
// };

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5])); // [2, 5]
// establish a first index element
// what properties should the
/*
strings, bools, etc
*/

// // console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
// console.log(onlyUnique([])); // []
// console.log(onlyUnique(['a'])); // ['a']
// console.log(onlyUnique(['a', 'a'])); // []
// console.log(onlyUnique(['a', 'a', 'a']));

// spreadsheets, and correct version of this solution

// let onlyUnique = (someArray) => {
//   let result = [];
//   let count = {};
//   l
//   for (const i of someArray) {
//     let item = someArray[i];
//     if (!count[item]) {
//       count[item] = 1;
//     } else {
//       count[item] + 1;
//     }
//   }

//   return count;
// };
// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
// let onlyUnique = (someArray) => {
//   // create a variable called set to create a new set
//   let set = new Set();
//   let result = [];
//   // iterate over the someArray
//   // if the set has any duplicate elements in the array, delete them
//   for (let i = 0; i < someArray.length; i++) {
//     console.log(someArray[i], someArray.indexOf(someArray[i]));
//     if (
//       someArray.indexOf(someArray[i]) !== someArray.indexOf(someArray[i + 1])
//     ) {
//       result.push(someArray[i]);
//     }
//   }

// the set has the number already
// if (!set.has(i)) {
// then delete the number
// without delete, maybe a set and an array
// set.add(i);
// console.log(set);
// otherwise add them the set
// } else {
//   set.add(i);
//   // console.log(set);
// }

// return the set with a spread operator in an array to match expected output
//   return result;
// };
// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
// console.log(onlyUnique([])); // []
// console.log(onlyUnique(['a'])); // ['a']
// console.log(onlyUnique(['a', 'a'])); // []
// console.log(onlyUnique(['a', 'a', 'a'])); // []

// let onlyUnique = (someArray) => {
//   let filtered = someArray.filter((value, index, arr) => {
//     return arr.indexOf(value) === index;
//   });
//   return filtered;
// };
// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]

// let onlyUnique = (someArray) => {
//   let result = [];
//   for (let i = 0; i < someArray.length; i++) {
//     for (let j = i + 1; j < someArray.length; j++) {
//       console.log(someArray[i], someArray[j]);
//       if (someArray[i] !== someArray[j]) {
//       //   // console.log(someArray.splice(0, i + j))
//         someArray.splice(someArray[i], someArray[j])

//       }
//     }
//   }
//   return someArray;
// };
// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]

// let onlyUnique = (someArray) => {
//   let set = new Set();
//   for (let i = 0; i < someArray.length; i++) {
//     for (let j = i + 1; j < someArray.length; j++) {
//       if (someArray.indexOf(someArray[i]) != someArray.indexOf(someArray[j])) {
//         set.add(someArray[j]);
//       }
//     }
//   }
//   return set;
// };
// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]

// let onlyUnique = (someArray) => {
//   someArray.reduce((previous, current) => {
//     if (previous === current) {
//       someArray.splice(current, 1);
//     }
//   });
//   return someArray;
// };

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]

// let onlyUnique = (someArray) => {
//   someArray.map((value, index) => {
//     console.log('element', value);
//     console.log('index', index);
//     // console.log();
//   });
// };

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]

// let onlyUnique = (someArray) => {
//   for (let i = 0; i < someArray.length; i++) {
//     let firstElement = someArray[i];

//     let nextElement = someArray[i + 1];
//     console.log('first', firstElement, 'next', nextElement);
//     if (firstElement === nextElement) {
//       someArray.splice(i, 1);
//       // firstElement = nextElement;
//     }
//   }
//   return someArray;
// };

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]

let onlyUnique = (someArray) => {
  const unique = someArray.filter((value) => {
    console.log(
      '   indexOf',
      someArray.indexOf(value),
      '   lastIndexOf',
      someArray.lastIndexOf(value)
    );

    return someArray.indexOf(value) === someArray.lastIndexOf(value);
  });
  return unique;
};

console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]

// let onlyUnique = (someArray) => {
//   let result = [];
//   for (let i = 0; i < someArray.length; i++) {
//     if (
//       someArray.indexOf(someArray[i]) === someArray.lastIndexOf(someArray[i])
//     ) {
//       result.push(someArray[i]);
//     }
//   }
//   return result;
// };

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
// console.log(onlyUnique([])); // []
// console.log(onlyUnique(['a'])); // ['a']
// console.log(onlyUnique(['a', 'a'])); // []
// console.log(onlyUnique(['a', 'a', 'a'])); // []
