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


/*
Where did I get tripped up? Its definitely in part because I've had the notion that 
iterating had to be done ON an object... I thought I was defining what I was iterating
though...for instance, if I'm 'iterating' over array2.length, then I'm directing the 
for loop to iterate over arr2. It's still a difficult concept to understand that
I'm only iterating through index numbers. But thats how for loops work right? Idk how
this was my understanding yet. 
*/


const mix3 = (arr1, arr2) => {
  let result = [];
  // determine whether the first input is the longest or the shortest
  // if the first input is the shortest
  if (arr1.length < arr2.length) {
    shortest = arr1;
    longest = arr2;
  } else {
    shortest = arr2;
    longest = arr1;
  }
  // iterate over the shortest array first and push matching indexes into the result arr
  for (let i = 0; i < shortest.length; i++) {
    result.push(arr1[i], arr2[i]);
  }
  // iterate from the length of the shortest array to the end of longest
  // push that longest arrays elements into result
  for (let j = shortest.length; j < longest.length; j++) {
    result.push(longest[j]);
  }

  return result;
};
console.log(mix3([1, 2, 3], [4, 5, 6]));
// [1, 4, 2, 5, 3, 6]
console.log(mix3(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
//  // ["h", 7, "a", 4, "c", 17, 10, 48]
console.log(mix3([7, 4, 17, 10, 48], ['h', 'a', 'c']));
//  [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]