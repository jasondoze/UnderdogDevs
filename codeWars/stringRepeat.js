/*
Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

const repeatStr = (n, s) => {
  let newString = '';
  for (let i = 0; i < n; i++) {
    newString += s;
  }
  return newString;
};
console.log(repeatStr(3, '*'), '***');
console.log(repeatStr(5, '#'), '#####');
console.log(repeatStr(2, 'ha '), 'ha ha ');

// using repeat
const repeatStr2 = (n, s) => {
  return s.repeat(n);
};
console.log(repeatStr2(3, '*'), '***');
console.log(repeatStr2(5, '#'), '#####');
console.log(repeatStr2(2, 'ha '), 'ha ha ');
