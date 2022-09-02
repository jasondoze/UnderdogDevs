// const mix3 = (arr1, arr2) => {
//   let result = [];
//   let longestArr = [];
//   let shortestArr = [];
//   // Find the the length of the shorter array, N, and longest array, M.
//   let shortestLength = Math.min(arr1.length, arr2.length);
//   // here I have established the shortest and longest arrays
//   if (arr1.length === shortestLength) {
//     shortestArr = arr1;
//     longestArr = arr2;
//   } else {
//     longestArr = arr1;
//     shortestArr = arr2;
//   }
//   if (shortestArr)
//   console.log(shortestArr, longestArr);

// };
// console.log(mix3([1, 2, 3], [4, 5, 6]));
// // [1, 4, 2, 5, 3, 6]
// console.log(mix3(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
// //  // ["h", 7, "a", 4, "c", 17, 10, 48]
// console.log(mix3([7, 4, 17, 10, 48], ['h', 'a', 'c']));
// //  [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]

const mix3 = (arr1, arr2) => {
  let result = [];
  let shortest = [];
  if (arr1.length < arr2.length) {
    shortest = arr1;
    longest = arr2;
  } else {
    shortest = arr2;
    longest = arr1;
  }
 
  for (let i = 0; i < shortest.length; i++) {
    result.push(arr1[i], arr2[i]);
  }
  for (let j = shortest.length; j < longest.length; j++) {
    result.push(longest[j]);
  }

  return result;
};