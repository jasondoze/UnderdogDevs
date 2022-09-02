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

  // first approach that had let me to screening for undefined
const mix = (firstArray, secondArray) => {
  let mixedArr = [];
  for (let i = 0; i < secondArray.length; i++) {
    let firstIdx = firstArray[i];
    let secondIdx = secondArray[i];
    //  console.log(firstIdx, secondIdx);
    if (firstIdx === undefined) {
      firstIdx.pop();
    }
  }
  return mixedArr;
};

console.log(mix([1, 2, 3], [4, 5, 6]));
// [1, 4, 2, 5, 3, 6]
console.log(mix(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
// ["h", 7, "a", 4, "c", 17, 10, 48]
console.log(mix([7, 4, 17, 10, 48], ['h', 'a', 'c']));
// [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]

/*
go through both arrays and take the first element of each array (pair of elements) 
and add them to a new array
if there are no more pairs to be made, ie one array is longer than the other then 
add the leftover elements to the end array

  // my english version for finding a solution
check both arrays to find the one that is the shortest, from the shortest array add pairs from both arrays
until the length of the shortest array, then add the reamaining elements of the longer array

  // jacobs version for finding the solution
Find the the length of the shorter array, N, and longest array, M. Add N interleaved pairs.
Add the last (M-N) elements of the longest array.
*/

  /*  
      A note I made after the meeting -> we're not defining anything to iterate over 
      but we are still iterating over them...

      I realize that language is fuzzy and incorrect, I am iterating over a defined length but what 
      I'm really thinking is what I believe you pointed out about what to iterate over, which I am still 
      not totally understanding. My underdstanding was that if I want to iterate over some input,
      I need to iterate over it in the loop and call its index or iteration somehow. I was looking 
      for information on this but I could'nt find what I was looking for. My question is, how does a loop
      know to iterate over the arrays or any input, if I dont specify iterating over them in the loop?
      This is a huge gap for me obviously lol.
  */
       
// Here I am iterating up to the shortest array, 
// then trying to iterate from the shortest to the longest.
const mix2 = (firstArray, secondArray) => {
  // create result arr
  let resultArr = [];
  // check both arrays to find the one that is the shortest
  let firstLength = firstArray.length;
  let secondLength = secondArray.length;
  let shortestLength = Math.min(firstLength, secondLength);
  let longestLength = Math.max(firstLength, secondLength);

  // iterate over for shortest length iterations
  for (let i = 0; i < shortestLength; i++) {
    // add pair
    resultArr.push(firstArray[i], secondArray[i]);
    
  }
    // iterate from shortest to longest lengths trying with an I instead of J
    for (let i = shortestLength; i < longestLength; i++) {
      resultArr.push(firstArray[i]);

  }
  // add the reamaining elements of the longer array
  return resultArr;
};
console.log(mix2([1, 2, 3], [4, 5, 6]));
// [1, 4, 2, 5, 3, 6]
console.log(mix2(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
// ["h", 7, "a", 4, "c", 17, 10, 48]
console.log(mix2([7, 4, 17, 10, 48], ['h', 'a', 'c']));
[ 7 , 'h', 4, 'a', 17, 'c', 10, 48]


/* Here I went down a path to find the shortest and the longest lengths and then used an if else 
statement to reassign the longest arr to a new array called longest and did the same with shortest.
After I had the the reassigned arrays, I always had the shortest and longest arrays but I was still 
pushing undefined elements into the result array.
*/

const mix3 = (arr1, arr2) => {
  let result = [];
  let shortestArr = [];
  let shortestLength = Math.min(arr1.length, arr2.length);
  let longestLength = Math.max(arr1.length, arr2.length);
  // if the first array is longer than the second then the first is the longsest
  // else the first is the shortest
  if (arr1.length === shortestLength) {
    shortestLength = arr1.length;
    longestLength = arr2.length;
  } else {
    shortestLength = arr2.length;
    longestLength = arr1.length;
  }
  // Find the the length of the shorter array, N, and longest array, M. Add N interleaved pairs.
  // Add the last (M-N) elements of the longest array.
  console.log(shortestLength);
  for (let i = 0; i < shortestLength; i++) {
    result.push(arr1[i], arr2[i]);
  }
  for (let j = shortestLength; j < longestLength; j++) {
    result.push(arr2[j]);
  }
  return result;
};
console.log(mix3([1, 2, 3], [4, 5, 6]));
// [1, 4, 2, 5, 3, 6]
console.log(mix3(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
//  // ["h", 7, "a", 4, "c", 17, 10, 48]
console.log(mix3([7, 4, 17, 10, 48], ['h', 'a', 'c']));
//  [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]


// Here I'm using undefined to determine which elements to push into the array
const mix4 = (arr1, arr2) => {
  let result = [];
  let longestLength = Math.max(arr1.length, arr2.length);
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
console.log(mix4([1, 2, 3], [4, 5, 6]));
// [1, 4, 2, 5, 3, 6]

console.log(mix4(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
//  // ["h", 7, "a", 4, "c", 17, 10, 48]

console.log(mix4([7, 4, 17, 10, 48], ['h', 'a', 'c']));
//  [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]
