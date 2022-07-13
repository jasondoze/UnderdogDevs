/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/

function isPalindrome(number) {
  if (number < 0) return false;
  if (number < 10) return true;
  let numbers = number.toString();
  console.log(typeof numbers);
  let numberLength = numbers.length;
  for (let i = 0; i < numberLength / 2; i++) {
    if (numbers[i] !== numbers[numberLength - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(121));

var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reverse = 0;
  let num = x;
  while (num > reverse) {
    reverse = (num % 10) + reverse * 10;
    num = parseInt(num / 10);
  }
  return num === reverse || num === parseInt(reverse / 10);
};
/*

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/
