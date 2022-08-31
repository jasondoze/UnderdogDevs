const helper = require('csvtojson');

/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
 String 2: 'orldhello w'
If you double the string, you'll be to trivially find another string 
inside it using regular String methods.

Doubled string: 'hello worldhello world'
Search w/in it: 'orldhello w'
*/
// let isRotated = (str1, str2) => {
//   // create doubled version of str1
//   let doubledStr = str1 + str2;
//   console.log(doubledStr);
//   // check for index of str2 with double str2
//   let index = doubledStr.indexOf(str2);
//   console.log(index);
//   // if present return true
//   if (index !== -1) {
//     console.log(index);
//     return true;
//   } else {
//     console.log(index);
//     // else return false
//     return false;
//   }
// };
// console.log(isRotated('hello world', 'orldhello w'));

let isRotated2 = (str1, str2) => {
  // if str1 is equal to str2
  if (str1 === str2) {
    // return true
    return true;
  }
  // convert string 1 into array
  let arr1 = str1.split('');
  // console.log('arr1', arr1);
  // take the last value of arr1 and put it at the front
  let lastValue = arr1.pop();
  console.log('lastValue', lastValue);
  arr1.unshift(lastValue);
  // console.log('arr1', arr1);
  // while str version of arr1 is not equal to original str1
  while (arr1.join('') !== str1) {
    // console.log('arr1.join', arr1);
    // compare the string version of arr1 with str2
    if (arr1.join('') === str2) {
      // console.log('arr1.join', arr1, 'str2', str2);
      // return true if they are the same
      return true;
    }
    // take the last value of arr1 and put it at the front
    let lastValue = arr1.pop();
    // console.log('lastValue', lastValue);
    arr1.unshift(lastValue);
    // console.log('arr1', arr1);
  }
  // else return false
  return false;
};
console.log(isRotated2('hello world', 'orldhello w'));
