let mixer = (arr1, arr2) => {
  var mix = [];
  let longest = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < longest; i++) {
    // console.log(longest);
    if (arr1[i] !== undefined) {
      // console.log(arr1[i]);
      mix.push(arr1[i]);
    }
    if (arr2[i] !== undefined) {
      // console.log(arr2[i]);
      mix.push(arr2[i]);
    }
  }
  return mix;
};

console.log(mixer(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
// console.log(mix4([1, 2, 3], [4, 5, 6]));
// // [1, 4, 2, 5, 3, 6]

// console.log(mix4(['h', 'a', 'c'], [7, 4, 17, 10, 48]));
// //  // ["h", 7, "a", 4, "c", 17, 10, 48]

// console.log(mix4([7, 4, 17, 10, 48], ['h', 'a', 'c']));
// //  [ 7 , 'h', 4, 'a', 17, 'c', 10, 48]
