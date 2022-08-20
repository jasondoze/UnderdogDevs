// Write a function `divisibleRange(min, max, num)` that accepts three numbers as arguments. The
// function should print all numbers between `min` and `max` (exclusive) that are also divisible by
// num.

let divisibleRange = (min, max, num) => {
  for (let i = min; i < max; i++) {
    if (i % num === 0) {
      console.log(i);
    }
  }
};

divisibleRange(17, 40, 9);
// prints
//  18
//  27
//  36

divisibleRange(10, 24, 4);
// prints
//  12
//  16
//  20

// Write a function `reverseIterate` that accepts a string as an argument. The function should print
// the characters of the string one by one, in reverse order. The function doesn't need to return any
// value. It should just print to the terminal.

let reverseIterate = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
};

reverseIterate('carrot');
// prints
//  t
//  o
//  r
//  r
//  a
//  c

reverseIterate('box');
// prints
//  x
//  o
//  b

// Write a function `removeCapitals` that accepts a string as an argument. The function should return a
// new version of the string with all capital letters removed.

let removeCapitals = (string) => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      newString += string[i];
    }
  }
  return newString;
};

console.log(removeCapitals('fOrEver')); // 'frver'
console.log(removeCapitals('raiNCoat')); // 'raioat'
console.log(removeCapitals('cElLAr Door')); // 'clr oor'

// Write a function `raisePower(base, exponent)` that accepts two numbers, `base` and `exponent`. The
// function should return `base` raised to the `exponent` power.
//
// For example, raisePower(2, 5) should return 32 because 2 * 2 * 2 * 2 * 2 = 32
// For example, raisePower(4, 3) should return 64 because 4 * 4 * 4 = 64

let raisePower = (base, exponent) => {
  let raised = 1;
  for (let i = 1; i <= exponent; i++) {
    // 1
    raised *= base; // 2
  }
  return raised;
};

console.log(raisePower(2, 5)); // 32
console.log(raisePower(4, 3)); // 64
console.log(raisePower(10, 4)); // 10000
console.log(raisePower(7, 2)); // 49

console.log('consorE');
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
