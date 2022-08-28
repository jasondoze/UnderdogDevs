/*
We are going to complete a function that takes in one array parameter 
(elements will be strings), and one string parameter, and returns a 
\string that is the result of joining the elements of the string together, 
separated by the string parameter. Your function should create a joinedString 
variable and assign it to a call to the .join() method, and return the 
joinedString variable. Below are examples of the code running, assuming 
that you will have completed the described function: applyJoin.
*/

let applyJoin = (array, str) => {
  let joinedStr = array.join(str);
  return joinedStr;
};

var resultString1 = applyJoin(['first', 'second', 'third'], '--');
console.log('should log joined string:', resultString1);

var resultString2 = applyJoin(['git', 'commit'], ' ');
console.log('should also log joined string:', resultString2);
