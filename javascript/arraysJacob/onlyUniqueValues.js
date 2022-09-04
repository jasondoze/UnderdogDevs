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

let onlyUnique = (someArray) => {
  // create a variable calles set to creat a new set
  let set = new Set();
  // iterate over the someArray
  // if the set has any duplicate elements in the array, delete them
  for (let i of someArray) {
    // the set has the number already
    if (set.has(i)) {
      // then delete the number
      set.delete(i);
      console.log(set);
      // otherwise add them the set
    } else {
      set.add(i);
      console.log(set);
    }
  }
  // return the set with a spread operator in an array to match expected output
  return [...set];
};
console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5])); // [2, 5]
