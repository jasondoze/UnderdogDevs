/*
We are going to complete a function that takes in two number parameters, 
representing the lower and upper bounds for a random number to be generated, 
and returns a randomly generated number within the described bounds. 
Your function should create a variable and assign it to the result of 
generating a random number using the Math.random() method, along with the 
formula described above, then return that variable. Below is an example of the 
code running, assuming that you will have completed the described function: generateRandomNumber.
*/

let generateRandomNumber = (min, max) => {
  let random = Math.random() * (max - min) + min;
  
  return parseFloat(random.toFixed(2));
};
let randomNumber = generateRandomNumber(1, 10);
console.log('should be between 1 and 10:', randomNumber);
