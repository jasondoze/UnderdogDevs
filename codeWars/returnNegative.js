/* In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

const makeNegative = (num) => {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
};

console.log(makeNegative(1)); // return -1
console.log(makeNegative(-5)); // return -5
console.log(makeNegative(0)); // return 0
console.log(makeNegative(0.12)); // return -0.12
console.log(makeNegative(1)); // return -1

// using math.abs

const makeNegative2 = (num) => {
  return -Math.abs(num)
}

console.log(makeNegative2(1)); // return -1
console.log(makeNegative2(-5)); // return -5
console.log(makeNegative2(0)); // return 0
console.log(makeNegative2(0.12)); // return -0.12
console.log(makeNegative2(1)); // return -1