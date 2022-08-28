/*
We are going to complete a function that takes in one parameter, 
and returns a string version of that parameter. Your function should 
create a stringVersion variable and assign it to a call of the toString() 
method on the input parameter, and return the stringVersion variable. 
Below are examples of the code running, assuming that you will have completed 
the described function: applyToString.
*/

let applyToString = (num) => {
  let stringVersion = num.toString();
  return stringVersion;
}


let input1 = 9374;
let resultString1 = applyToString(input1);
console.log('should log "9374":', resultString1);
console.log('type should be "string":', typeof resultString1);

let input2 = false;
let resultString2 = applyToString(input2);
console.log('should log "false":', resultString2);
console.log('type should be "string":', typeof resultString2);