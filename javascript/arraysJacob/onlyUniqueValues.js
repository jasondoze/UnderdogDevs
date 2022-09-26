// Return only unique values
// In this JavaScript array exercise, the supplied array may contain duplicate
// values. Write a function to return only unique values — values that only occur
// exactly one time within the provided array.

// english version, go over the numbers twice and evaluate which numbers only appear
// one time

// My first version of getting unique values, which does not mean getting
// ONLY unique values.
const onlyUnique = (someArray) => {
  // create a unique array variable
  // iterate over the length of the array
  // if the element in the array only appears once
  // if the element is not present within any other index of the length of the
  // array
  // push it into the unique array
  let unique = [];
  for (let i = 0; i < someArray.length; i++) {
    for (let j = i + 1; j < someArray.length; j++) {
      let firstIndex = someArray[i];
      let currIndex = someArray[j];
      // console.log(firstIndex, currIndex);
      if (firstIndex === currIndex) {
        someArray.splice(j, 1);
      }
    }
  }
  return someArray;
};

console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5])); // [2, 5]
// output: [ 1, 2, 3, 4, 5 ]

// establish a first index element
// what properties should the

/*
strings, bools, etc
*/

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
// console.log(onlyUnique([])); // []
// console.log(onlyUnique(['a'])); // ['a']
// console.log(onlyUnique(['a', 'a'])); // []
// console.log(onlyUnique(['a', 'a', 'a']));

// spreadsheets, and correct version of this solution

// Using an object to count the number of times each value is present in the array
// let onlyUnique = (someArray) => {
//   let result = [];
//   // create a count obj
//   let count = {};
//   // iterate over the array of numbers
//   for (let i = 0; i < someArray.length; i++) {
//     // if the count object does not have any of the numbers within
//     if (!count[someArray[i]]) {
//       // initialize the first key: value to one in the obj
//       count[someArray[i]] = 1;
//       // console.log(count);
//       // if the key: value is present in the obj, add one to its value
//     } else {
//       count[someArray[i]] += 1;
//       // console.log(count);
//     }
//   }
//   // iterate over the count obj
//   for (let j in count) {
//     // if the value of the key numbers = 1
//     if (count[j] === 1) {
//       // push the converted value to a number to the result array
//       result.push(Number(j));
//     }
//   }
//   return result;
// };
// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
// ouput: [ 2, 5 ]

// Fumbling around with index of
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
//   return result;
// };

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
/*
output:
1 0
1 0
2 2
3 3
3 3
4 5
4 5
4 5
5 8
[ 1, 2, 3, 4, 5 ]
1 0
1 0
2 2
3 3
3 3
4 5
4 5
4 5
5 8
[ 1, 2, 3, 4, 5 ]
[]
a 0
[ 'a' ]
a 0
a 0
[ 'a' ]
a 0
a 0
a 0
[ 'a' ]
*/

// // Original work using set
// let onlyUnique = (someArray) => {
//   // create a new set variable
//   let set = new Set();
//   // iterate over someArray
//   for (let i = 0; i < someArray.length; i++) {
//     // if the set doesnt have the number already
//     if (!set.has(someArray[i])) {
//       // then add the number to set
//       set.add(someArray[i]);
//       // console.log(set);
//       // otherwise delete them from the set
//     } else {
//       set.delete(someArray[i]);
//       // console.log(set);
//     }
//   }

//   // return the set with a spread operator in an array to match expected output
//   return set;
// };
// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
// console.log(onlyUnique([])); // []
// console.log(onlyUnique(['a'])); // ['a']
// console.log(onlyUnique(['a', 'a'])); // []
// console.log(onlyUnique(['a', 'a', 'a'])); // []
/*
output: 
Set(3) { 2, 4, 5 }
Set(0) {}
Set(1) { 'a' }
Set(0) {}
Set(1) { 'a' }
*/

// This filters out duplicate items but not all duplicate items
// let onlyUnique = (someArray) => {
//   let filtered = someArray.filter((value, index, arr) => {
//     return arr.indexOf(value) === index;
//   });
//   return filtered;
// };
// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]

// Wrong approach
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

// Here was my unsuccessful commented out code, and I applied the same solution
// from the last function on the page for it to give the correct result

// let onlyUnique = (someArray) => {
//   let set = new Set();
//   for (let i = 0; i < someArray.length; i++) {
//     // for (let j = i + 1; j < someArray.length; j++) {
//     // if (someArray.indexOf(someArray[i]) != someArray.indexOf(someArray[j])) {
//     if (
//       someArray.indexOf(someArray[i]) === someArray.lastIndexOf(someArray[i])
//     ) {
//       set.add(someArray[i]);
//     }
//   }
//   // return set;
//   return [...set];
// };
// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
// output: [ 2, 5 ]

// A quick try with reduce and splice, not successfull
// let onlyUnique = (someArray) => {
//   someArray.reduce((previous, current) => {
//     if (previous === current) {
//       someArray.splice(current, 1);
//     }
//   });
//   return someArray;
// };

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
//  output:
// [
//   1, 2, 3, 3,
//   4, 4, 4, 5
// ]

// Here I was just playing with map to get the value and index logged out
// let onlyUnique = (someArray) => {
//   someArray.map((value, index) => {
//     console.log('element', value, 'index', index);
//   });
// };

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
/*
output: 
element 1 index 0
element 1 index 1
element 2 index 2
element 3 index 3
element 3 index 4
element 4 index 5
element 4 index 6
element 4 index 7
element 5 index 8
*/

// let onlyUnique = (someArray) => {
//   const unique = someArray.filter((value) => {
//     console.log(
//       '   indexOf',
//       someArray.indexOf(value),
//       '   lastIndexOf',
//       someArray.lastIndexOf(value)
//     );

//     return someArray.indexOf(value) === someArray.lastIndexOf(value);
//   });
//   return unique;
// };

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 4, 5])); // [2, 5]
// console.log(onlyUnique([])); // []
// console.log(onlyUnique(['a'])); // ['a']
// console.log(onlyUnique(['a', 'a'])); // []
// console.log(onlyUnique(['a', 'a', 'a'])); // []
/*
  output:
   indexOf 0    lastIndexOf 1
   indexOf 0    lastIndexOf 1
   indexOf 2    lastIndexOf 2
   indexOf 3    lastIndexOf 4
   indexOf 3    lastIndexOf 4
   indexOf 5    lastIndexOf 7
   indexOf 5    lastIndexOf 7
   indexOf 5    lastIndexOf 7
   indexOf 8    lastIndexOf 8
[ 2, 5 ]
jasondoze@jd arraysJacob % node onlyUniqueValues.js
   indexOf 0    lastIndexOf 1
   indexOf 0    lastIndexOf 1
   indexOf 2    lastIndexOf 2
   indexOf 3    lastIndexOf 4
   indexOf 3    lastIndexOf 4
   indexOf 5    lastIndexOf 7
   indexOf 5    lastIndexOf 7
   indexOf 5    lastIndexOf 7
   indexOf 8    lastIndexOf 8
[ 2, 5 ]
[]
   indexOf 0    lastIndexOf 0
[ 'a' ]
   indexOf 0    lastIndexOf 1
   indexOf 0    lastIndexOf 1
[]
   indexOf 0    lastIndexOf 2
   indexOf 0    lastIndexOf 2
   indexOf 0    lastIndexOf 2
[]
*/

// let onlyUnique = (someArray) => {
//   //create an empty result array
//   let result = [];
//   //iterate over the array
//   for (let i = 0; i < someArray.length; i++) {
//     // if the index occurence of the value equals the last index occurence of the value
//     if (
//       someArray.indexOf(someArray[i]) === someArray.lastIndexOf(someArray[i])
//     ) {
//       // push those values to the result arr
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

/*
output: 
[ 2, 5 ]
[]
[ 'a' ]
[]
[]
*/
