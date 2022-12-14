/*
Kill the K-th Bit
Submitted on Today at 6:02 PM
Write a function that takes a decimal number n and a decimal number k. Convert n to a binary number and then take that kth bit from the right and change it from a 1 to a 0 if possible. Then, return the new number as a decimal number.

For example:

killKthBit(10, 2)

// 1. 10 in decimal is '1010'
// 2. The 2nd bit from the right is the right-most 1
// 3. Change it to a 0, '1000'
// 4. Return the decimal representation of the number which is 8
*/

function killKthBit(n, k) {
  let binary = n.toString(2); // 1010
  // if the index at 2 is a 1
  if (binary[binary.length - k] == 1) {
    // replace the 1 with a zero
    binary = binary.substring(0, binary.length - k) + '0' + binary.substring(3);
    // console.log(binary);
    return parseInt(binary, 2);
  } else {
    return n;
  }
}
console.log(killKthBit(10, 2));