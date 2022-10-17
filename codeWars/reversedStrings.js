// using a for loop with reversed iteration
let solution = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
console.log(solution('world'));

// using reverse array method
let solution2 = (string) => {
  let reversed = string.split('').reverse().join('');
  return reversed;
};
console.log(solution2('world'));

// using reverse method with spread operator w/o using split
let solution3 = (string) => {
  return [...string].reverse().join('');
};
console.log(solution3('world'));
