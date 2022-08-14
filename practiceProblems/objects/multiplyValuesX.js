// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

function myFunction(obj, int) {
  let result = {};
  for (let i in obj) {
    let nums = obj[i];
    // console.log(nums);
    nums *= int;
    result[i] = nums;
  }
  return result;
}


console.log(myFunction({ j:9,i:2,x:3,z:4},10));
// { j: 90, i: 20, x: 30, z: 40 }