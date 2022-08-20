let sum = 0; // 1 + 2 + 3
for (let num = 1; num <= 3; num++) {
  console.log(num);
  sum += num; // 6
}
console.log(sum);

console.log('hi');

for (let i = 3; i <= 7; i++) {
  console.log('program');
  console.log(i);
}

console.log('bye');
//  hi, 3 program, 4 program, 5 program 6 7 ...etc, bye

let foo = function () {
  for (let num = 10; num > 0; num -= 2) {
    // 10 ,8, 6, 4, 2, 0
    console.log(num);
  }
};

console.log('begin');
foo();
console.log('end');
foo();

// begin
// 10 ,8, 6, 4, 2
// end
// 10 ,8, 6, 4, 2

let total = 0;
for (let i = 1; i < 5; i++) {
  // 1 true, 2 true, 3 true, 4 true 5 false
  total += i; // 1 + 2 + 3 + 4
  console.log(total); // 1, 3, 6, 10
}

console.log('grand total: ' + total);
// grand total: 6

// Write a function `oneToFour` that prints all whole numbers from one to four, inclusive. The function
// takes in no arguments and doesn't need to return any value. It should just print to the terminal.

let oneToFour = () => {
  for (let i = 1; i <= 4; i++) {
    console.log(i);
  }
};
oneToFour();
// prints
//  1
//  2
//  3
//  4

// Write a function `countUp(max)` that accepts a max number as an argument. The function should print
// all numbers from 1 up to and including the max. The function doesn't need to return any value. It
// should just print to the terminal.

let countUp = (max) => {
  for (let i = 1; i <= max; i++) {
    console.log(i);
  }
};

countUp(5);
// prints
//  1
//  2
//  3
//  4
//  5

countUp(3);
// prints
//  1
//  2
//  3

// Write a function `minToMax(min, max)` that accepts two numbers as arguments. The function should
// print all numbers from min to max inclusive. The function doesn't need to return any value. It
// should just print to the terminal.
console.log('break');
let minToMax = function (mini, maxi) {
  for (let i = mini; i <= maxi; i++) {
    console.log(i);
  }
};

minToMax(5, 9);
// prints
//  5
//  6
//  7
//  8
//  9

minToMax(11, 13);
// prints
//  11
//  12
//  13

minToMax(20, 11);

// Write a function `stringIterate` that accepts a string as an argument. The function should print out
// each character of the string, one by one. The function doesn't need to return any value. It should
// just print to the terminal.

let stringIterate = (striing) => {
  for (let i = 0; i < striing.length; i++) {
    console.log(striing[i]);
  }
};

stringIterate('celery');
// prints
//  c
//  e
//  l
//  e
//  r
//  y

stringIterate('hat');
// prints
//  h
//  a
//  t

// Write a function `evens(max)` that accepts a max number as an argument. The function should print
// all positive even numbers that are less than the max.

let evens = (maximum) => {
  for (let i = 0; i < maximum; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

evens(11);
// prints
//  2
//  4
//  6
//  8
//  10

evens(8);
// prints
//  2
//  4
//  6

// Write a function named `fiveMultiplesOf` that accepts a number as an argument. The function should
// print out the first five multiples of the given number. The function doesn't need to return any
// value. It should just print to the terminal.
console.log('numeral');
let fiveMultiplesOf = (numeral) => {
  for (let i = 1; i <= 5; i++) {
    console.log(i * numeral);
  }
};

fiveMultiplesOf(7);
// prints
//  7
//  14
//  21
//  28
//  35

fiveMultiplesOf(3);
// prints
//  3
//  6
//  9
//  12
//  15

// Write a function named `sumUpTo(max)` that accepts a max number as an argument. The function should
// return the total sum of all whole numbers from 1 to the max, inclusive.
//
// For example, sumUpTo(4) should return 10 because 1 + 2 + 3 + 4 = 10.

console.log('break');
let sumUpTo = (max) => {
  let total = 0;
  for (let i = 1; i <= max; i++) {
    // 1
    total += i;
    console.log(i);
  }
  return total;
};
console.log(sumUpTo(4)); // 10
// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(2)); // 3

// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.
console.log('break');
let noOhs = (stringer) => {
  for (let i = 0; i < stringer.length; i++) {
    if (stringer[i] !== 'o') {
      console.log(stringer[i]);
    }
  }
};

noOhs('code');
// prints
//  c
//  d
//  e

noOhs('school');
// prints
//  s
//  c
//  h
//  l

// Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
// return the total sum of all odd numbers from 1 to the max, inclusive.
//
// For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25
console.log('break');
let oddSum = (max) => {
  let totally = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 2 === 1) {
      totally += i;
    }
  }
  return totally;
};

console.log(oddSum(10)); // 25
console.log(oddSum(5)); // 9

// Write a function named `stringRepeater(str, num)` that accepts a string and a number as arguments.
// The function should return a new string consisting of the `str` repeated `num` number of times.

let stringRepeater = (striz, numz) => {
  let repeated = ''; // 'go' + 'go'
  for (let i = 1; i <= numz; i++) {
    // i = 1, 2
    repeated += striz; //
  }
  return repeated;
};

console.log(stringRepeater('q', 4)); // 'qqqq'
console.log(stringRepeater('go', 2)); // 'gogo'
console.log(stringRepeater('tac', 3)); // 'tactactac'

// Write a function named `productUpTo(max)` that accepts a max number as an argument. The function
// should return the total product of all whole numbers from 1 to the max, inclusive. A product is a
// number obtained from multiplying numbers together.
//
// For example, productUpTo(4) should return 24 because 1 * 2 * 3 * 4 = 24

let productUpTo = (max) => {
  let producto = 1;
  for (let i = 1; i <= max; i++) {
    producto *= i;
  }
  return producto;
};

console.log(productUpTo(4)); // 24
console.log(productUpTo(5)); // 120
console.log(productUpTo(7)); // 5040

// Write a function named `divByEither(num1, num2, max)` that accepts three numbers as arguments.
// The function should print out all positive numbers less than max that are divisible by num1 or num2.
// The function doesn't need to return any value. It should just print to the terminal.
console.log('divByEither');
let divByEither = (numz1, numz2, maxer) => {
  for (let i = 1; i < maxer; i++) {
    if (i % numz1 === 0 || i % numz2 === 0) {
      console.log(i);
    }
  }
};

divByEither(4, 3, 16);
// prints
//  3
//  4
//  6
//  8
//  9
//  12
//  15

divByEither(7, 5, 20);
// prints
//  5
//  7
//  10
//  14
//  15
