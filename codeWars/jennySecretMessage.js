/*
Jenny has written a function that returns a greeting for a user. However, 
she's in love with Johnny, and would like to greet him slightly different. 
She added a special case to her function, but she made a mistake.
*/

// function greet(name){
//   return "Hello, " + name + "!";
//   if(name === "Johnny")
//     return "Hello, my love!";
// }

const greet = (name) => {
  if (name !== 'Johnny') {
    return `Hello, ${name}!`;
  } else {
    return `Hello, my love!`;
  }
};
console.log(greet('Jim')), // "Hello, Jim!"
console.log(greet('Jane')); // "Hello, Jane!"
console.log(greet('Simon')); // "Hello, Simon!"
console.log(greet('Johnny'))
