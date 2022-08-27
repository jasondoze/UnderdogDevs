// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

let makeAcronym = (str) => {
  let returnString = '';
  let split = str.split(' ');
  for (let i = 0; i < split.length; i++) {
    let first = split[i][0].toUpperCase();
    returnString += first;
  }
  return returnString;
};

console.log(makeAcronym('New York')); // NY
console.log(makeAcronym('same stuff different day')); // SSDD
console.log(makeAcronym('Laugh out loud')); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS