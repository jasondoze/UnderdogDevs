/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

// stack data structure
*/

const isValid = (string) => {
  // initialize stack to store the closing brackets expected
  let stack = [];
  // iterate over each character in the string
  for (let i = 0; i < string.length; i++) {
    // if open parentheses are present, push it to the stack
    if (string[i] === '{') {
      stack.push('}');
    } else if (string[i] === '[') {
      stack.push(']');
    } else if (string[i] === '(') {
      stack.push(')');

      // if a close bracket is found, check that it matches the last stored open bracket
    } else if (stack.pop() !== string[i]) {
      return false;
    }
  }
  return !stack.length;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));

/*
This explanation is more for optimization than explaining over all what is happening.
For those wanting to learn how I did Valid Parenthesis on a high level, I essentially utilized a hash table, stack and a simple loop.

Going into the optimizations
(you can follow along with the numbered items with code comments):
We can't speed this up any further so we're going to optimize for certain conditions.

I defeated a lot of edge cases in O(1) with basic + modulus check
It just makes sense that if a string has a odd length, we don't need to waste any more time and just immediately return false
eg. [](, {}], }{} there will never be a length of 3 items that will equate to returning true
The moment we encounter a character that can't pop from the stack, immediately break from the loop and return false
Just add a ! to turn the value into a boolean data type while also flipping the result
*/

const isValid2 = (string) => {
  // if the string is empty return true
  if (string.length === 0) return true;
  // if the string has one character, return false
  if (string.length === 1) return false;
  // if the string character count is not even, return false
  if (string.length % 2 !== 0) return false;

  // initialize an object with closed parens as the key and open parens as the value
  const parenObj = {
    '}': '{',
    ')': '(',
    ']': '[',
  };
  // create an empty array var stack
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    // current character is string at i
    const currChar = string[i];
    // last char is last index
    const lastChar = stack[stack.length - 1];
    // delete char is parenObj[currChar]
    const delChar = parenObj[currChar];
    console.log(currChar, lastChar, delChar);
    if (delChar) {
      if (delChar === lastChar) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(currChar);
    }
  }
  return !stack.length;
};
console.log(isValid2('()'));
console.log(isValid2('()[]{}'));
console.log(isValid2('(]'));
