// Write a function `censorE` that accepts a string as an argument. The function should return the a new
// version of string where all characters that are 'e's are replaced with '*'s.

let censorE = (stringer) => {
  let newResult = '';
  for (let i = 0; i < stringer.length; i++) {
    if (stringer[i] === 'e') {
      newResult += '*';
    } else {
      newResult += stringer[i];
    }
  }
  return newResult;
};

console.log(censorE('speedy')); // 'sp**dy'
console.log(censorE("pending")); // 'p*nding'
console.log(censorE("scene")); // 'sc*n*'
console.log(censorE("heat")); // 'h*at'