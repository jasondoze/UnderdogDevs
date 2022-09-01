/*
2. Evenly mix two arrays
Write a function that receives two arrays, then mix the two arrays evenly 
–starting with the first item of the first array. The returned array should 
alternate between each array in turn, one element at a time. So the sequence 
would look like:

Array 1 first element, Array 2 first element, Array 1 second element, 
Array 2 second element… and so on.

The elements that make up the arrays are completely random, and 
the arrays can be of differing lengths.
*/

// const mix = (firstArray, secondArray) => {
//   let mixedArr = [];
//   for (let i = 0; i < secondArray.length; i++) {
//     let firstIdx = firstArray[i];
//     let secondIdx = secondArray[i];
//     //  console.log(firstIdx, secondIdx);
//     if (firstIdx === undefined) {
//       firstIdx.pop();
//     }
//   }
//   return mixedArr;
// };

// console.log(mix([1, 2, 3], [4, 5, 6]));
// // [1, 4, 2, 5, 3, 6]
// console.log(mix(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
// // ["h", 7, "a", 4, "c", 17, 10, 48]
// console.log(mix([7, 4, 17, 10, 48], ['h', 'a', 'c']));
// [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]

/*
go through both arrays and take the first element of each array (pair of elements) 
and add them to a new array
if there are no more pairs to be made, ie one array is longer than the other then 
add the leftover elements to the end array

check both arrays to find the one that is the shortest, from the shortest array add pairs from both arrays
until the length of the shortest array, then add the reamaining elements of the longer array

Find the the length of the shorter array, N, and longest array, M. Add N interleaved pairs.
Add the last (M-N) elements of the longest array.
*/

// we're not defining anything to iterate over but we are still iterating over them
// const mix2 = (firstArray, secondArray) => {
//   // create result arr
//   let resultArr = [];
//   // check both arrays to find the one that is the shortest
//   let firstLength = firstArray.length;
//   let secondLength = secondArray.length;
//   let shortestLength = Math.min(firstLength, secondLength);
//   let longestLength = Math.max(firstLength, secondLength);
// //   console.log(shortestLength);
//   // iterate over both arrays for shortest length iterations
//   for (let i = 0; i < shortestLength; i++) {
//     // add pair
//     resultArr.push(firstArray[i], secondArray[i]);
//   }
//     for (let i = shortestLength; i < longestLength; i++) {
//       resultArr.push(firstArray[i]);

//   }
//   // add the reamaining elements of the longer array
//   return resultArr;
// };
// console.log(mix2([1, 2, 3], [4, 5, 6]));
// // [1, 4, 2, 5, 3, 6]
// console.log(mix2(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
// // ["h", 7, "a", 4, "c", 17, 10, 48]
// console.log(mix2([7, 4, 17, 10, 48], ['h', 'a', 'c']));
// [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]
/*
2. Evenly mix two arrays
Write a function that receives two arrays, then mix the two arrays evenly 
–starting with the first item of the first array. The returned array should 
alternate between each array in turn, one element at a time. So the sequence 
would look like:

Array 1 first element, Array 2 first element, Array 1 second element, 
Array 2 second element… and so on.

The elements that make up the arrays are completely random, and 
the arrays can be of differing lengths.
*/



/*
go through both arrays and take the first element of each array (pair of elements) 
and add them to a new array
if there are no more pairs to be made, ie one array is longer than the other then 
add the leftover elements to the end array

check both arrays to find the one that is the shortest, from the shortest array add pairs from both arrays
until the length of the shortest array, then add the reamaining elements of the longer array

Find the the length of the shorter array, N, and longest array, M. Add N interleaved pairs.
Add the last (M-N) elements of the longest array.
*/

// const mix3 = (arr1, arr2) => {
//   let result = [];
//   let shortestArr = [];
//   // define the shortest length of both arrays
//   let shortest = Math.min(arr1.length, arr2.length);
//   console.log('shortest', shortest);
//   // iterate from 0 to shortest.length
//   for (let i = 0; i < shortest; i++) {
//     result.push(arr1[i], arr2[i]);
//     console.log('result', result, i);
//   }
//   // define the longest length of both arrays
//   let longest = Math.max(arr1.length, arr2.length);
//   console.log('longest', longest);
//   // iterate from shortest.length to longest.length
//   for (let j = 0; j < longest; j++) {
//     console.log('j', j);
//     result.push('shortest[j]', longest[j]);
//     console.log('result', result);
//   }
//   return result;
// };
// // console.log(mix3([1, 2, 3], [4, 5, 6]));
// // [1, 4, 2, 5, 3, 6]
// // console.log(mix3(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
// //  // ["h", 7, "a", 4, "c", 17, 10, 48]
// console.log(mix3([7, 4, 17, 10, 48], ['h', 'a', 'c']));
// //  [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]

// const mix3 = (arr1, arr2) => {
//   let result = [];
//   let shortestArr = [];
//   let shortestLength = Math.min(arr1.length, arr2.length);

//   let longestLength = Math.max(arr1.length, arr2.length);
//   // if the first array is longer than the second then the first is the longsest
//   // else the first is the shortest
//   if (arr1.length === shortestLength) {
//     shortestLength = arr1.length;
//     longestLength = arr2.length;
//   } else {
//     shortestLength = arr2.length;
//     longestLength = arr1.length;
//   }
//   // Find the the length of the shorter array, N, and longest array, M. Add N interleaved pairs.
//   // Add the last (M-N) elements of the longest array.
//   console.log(shortestLength);
//   for (let i = 0; i < shortestLength; i++) {
//     result.push(arr1[i], arr2[i]);
//   }
//   for (let j = shortestLength; j < longestLength; j++) {
//     result.push(arr2[j]);
//   }
//   return result;
// };
// console.log(mix3([1, 2, 3], [4, 5, 6]));
// // [1, 4, 2, 5, 3, 6]
// console.log(mix3(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
// //  // ["h", 7, "a", 4, "c", 17, 10, 48]
// console.log(mix3([7, 4, 17, 10, 48], ['h', 'a', 'c']));
// //  [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]

const mix3 = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < longestLength; i++) {
    if (arr1[i] !== undefined) {
      result.push(arr1[i]);
    }
    if (arr2[i] !== undefined) {
      result.push(arr2[i]);
    }
  }
  return result;
};
console.log(mix3([1, 2, 3], [4, 5, 6]));
// [1, 4, 2, 5, 3, 6]
console.log(mix3(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
//  // ["h", 7, "a", 4, "c", 17, 10, 48]
console.log(mix3([7, 4, 17, 10, 48], ['h', 'a', 'c']));
//  [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]
