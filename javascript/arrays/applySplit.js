/*
We are going to complete a function that takes in two string parameters 
(stringToBeSplit, splitter), and returns an array that is the result of 
splitting the stringToBeSplit parameter on the splitter parameter. Your 
function should create a splitString variable and assign it to a call to 
the .split() method, and return the splitString variable. Below are 
examples of the code running, assuming that you will have completed the 
described function: applySplit.
*/

let applySplit = (str1, str2) => {
  let splitStr = str.split(str2);
  return splitStr;
};

var resultArray1 = applySplit('first--second--third', '--');
console.log('should log split string:', resultArray1);

var resultArray2 = applySplit('git push origin master', ' ');
console.log('should also log split string:', resultArray2);
