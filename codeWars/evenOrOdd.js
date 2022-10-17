// Create a function that takes an integer as an argument and returns "Even"
// for even numbers or "Odd" for odd numbers.

let even_or_odd = (number) => {
  if (Math.abs(number) % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};
console.log(even_or_odd(2));
console.log(even_or_odd(7));
console.log(even_or_odd(-42));
console.log(even_or_odd(-7));
console.log(even_or_odd(0));


// without math abs
let even_or_odd1 = (number) => {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};
console.log(even_or_odd1(2));
console.log(even_or_odd1(7));
console.log(even_or_odd1(-42));
console.log(even_or_odd1(-7));
console.log(even_or_odd1(0));
