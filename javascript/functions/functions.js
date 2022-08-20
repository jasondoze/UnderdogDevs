let calculateAverage = function (num1, num2) {
  // console.log('im a function');
  // console.log('ending function');
  let sum = num1 + num2;
  let average = sum / 2;
  return average;
};
console.log('one');
// calculateAverage();
console.log('two');
// calculateAverage();
console.log(calculateAverage(10, 15));

let result = calculateAverage(10, 15);
console.log(result + 2);
/*
one
two
12.5
14.5
*/

let yellOrWhisper = function (str) {
  if (str.length > 4) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};
console.log(yellOrWhisper('exCellent'));
console.log(yellOrWhisper('ME'));
// EXCELLENT
// me

let greet = function () {
  console.log('hey');
  console.log('programmers');
};

let whistle = function () {
  console.log('doot');
};

console.log('first'); // first
console.log('second'); // second
greet(); // hey, programmers
console.log('third'); // third
console.log('fourth'); // fourth
whistle(); // doot

let howMany = function () {
  return 42;
};

console.log(howMany); // [function howMany]
console.log(howMany()); // 42

const theAnswer = howMany();
console.log(theAnswer); // 42

let howMuch = function () {
  5;
};
console.log(howMuch()); // undefined

let average = function (num1, num2) {
  console.log('calculating...');
  return (num1 + num2) / 2;
};

console.log(average(5, 10)); // 7.5
console.log(average(20, 26)); // 23
console.log(average(50, 100) + 2); //77

let a = 21 + 3; // 24
let b = 20;
let n = average(a, b); // 24, 20,  44/2 = 22
console.log(average(n, 18)); // 22, 18  = 40 / 2 = 20

let exclaim = function (str) {
  let capitalized = str.toUpperCase();
  return capitalized + '!!';
};

let result1 = exclaim('potato');
console.log(result1); // POTATO!!
console.log(result1.length); // 8
console.log(result1[0]); // P
console.log(result1[result1.length - 1]); //!

// Write a function `isDivBy4` that accepts a number as an argument.
// The function should return a boolean indicating whether or not the
// number is divisible by 4.

let isDivBy4 = function (num) {
  if (num % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isDivBy4(8)); // true
console.log(isDivBy4(12)); // true
console.log(isDivBy4(24)); // true
console.log(isDivBy4(9)); // false
console.log(isDivBy4(10)); // false

// Write a function `endsWithT` that accepts a string as an argument.
// The function should return a boolean indicating whether or not the string
// ends with the character 't'.

let endsWithT = (str) => {
  if (str.endsWith('t')) {
    return true;
  } else {
    return false;
  }
};

console.log(endsWithT('smart')); // true
console.log(endsWithT('racket')); // true
console.log(endsWithT('taco')); // false
console.log(endsWithT('boomerang')); // false

/* Write a function `startsWithR` that accepts a string as an argument and 
returns a boolean indicating whether or not the string starts with 'r' or 'R'.
*/

let startsWithR = (str) => {
  if (str[0] === 'r' || str[0] === 'R') {
    return true;
  } else {
    return false;
  }
};
console.log(startsWithR('roger that')); // true
console.log(startsWithR('Row, row, row your boat')); // true
console.log(startsWithR('slip')); // false
console.log(startsWithR('Taxicab')); // false

/*

*/

/*
Write a function `oneOrNone` that accepts two booleans as arguments. 
The function should return true if exactly one of the arguments is true. 
If BOTH arguments are true, then it should return false.
*/

let oneOrNone = (bool1, bool2) => {
  if (bool1 === bool2) {
    return false;
  } else {
    return true;
  }
};
console.log(oneOrNone(false, false)); // false
console.log(oneOrNone(true, false)); // true
console.log(oneOrNone(false, true)); // true
console.log(oneOrNone(true, true)); // false

/*
Write a function `funnySound` that accepts two strings as arguments. 
The function should return a new string containing the first three 
characters of both strings concatenated together.

You can assume that the arguments are both at least three characters long.
*/

let funnySound = (str1, str2) => {
  let firstThree = str1.slice(0, 3); // (start extraction, extract up to but not including)
  let secondThree = str2.slice(0, 3);
  return firstThree + secondThree;
};
console.log(funnySound('tiger', 'spoon')); // 'tigspo'
console.log(funnySound('computer', 'phone')); // 'compho'
console.log(funnySound('skate', 'bottle')); // 'skabot'
console.log(funnySound('frog', 'ashtray')); // 'froash'

/*
Write a function `wackyWord` that accepts two strings as arguments. 
The function should return a new string containing the first three 
characters of the first string concatenated with the last two
character of the second string.
*/

let wackyWord = (str1, str2) => {
  let first = str1.slice(0, 3);
  let second = str2.slice(-2);
  return first + second;
};

console.log(wackyWord('very', 'kindly')); // 'verly'
console.log(wackyWord('forever', 'sick')); // 'forck'
console.log(wackyWord('cellar', 'door')); // 'celor'
console.log(wackyWord('bagel', 'sweep')); // 'bagep'

/*
Write a function `divisible(num1, num2)` that accepts two numbers as arguments. 
The function should return a boolean indicating whether or not `num1` is divisible by `num2`.
*/

let divisible = (int1, int2) => {
  if (int1 % int2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(divisible(12, 3)); // true
console.log(divisible(12, 5)); // false
console.log(divisible(60, 4)); // true
console.log(divisible(60, 11)); // false
console.log(divisible(21, 7)); // true
console.log(divisible(21, 6)); // false

/*
Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
return the uppercase version of the string if the boolean is true. The function should return the
lowercase version of the string if the boolean is false.
*/

let caseChange = (string, bool) => {
  if (bool === true) {
    return string.toUpperCase();
  } else {
    return string.toLowerCase();
  }
};

console.log(caseChange('Super', true)); // 'SUPER'
console.log(caseChange('Super', false)); // 'super'
console.log(caseChange('tAmBourine', true)); // 'TAMBOURINE'
console.log(caseChange('tAmBourine', false)); // 'tambourine'

/*
Write a function `inRange(min, max, n)` that accepts three numbers as arguments. 
The function should return a boolean indicating if `n` is between `min` and `max` inclusive.
*/

let inRange = (min, max, n) => {
  if (n >= min && n <= max) {
    return true;
  } else {
    return false;
  }
};

console.log(inRange(5, 13, 8)); // true
console.log(inRange(5, 13, 29)); // false
console.log(inRange(100, 125, 100)); // true
console.log(inRange(100, 125, 99)); // false
console.log(inRange(40, 45, 44)); // true
console.log(inRange(40, 45, 45)); // true
console.log(inRange(40, 45, 46)); // false

/*
Write a function `averageOfFour(num1, num2, num3, num4)` that accepts 
four numbers as arguments. The function should return the average of all four numbers.
*/

let averageOfFour = (intUno, intDos, intTres, intQuatro) => {
  let sum = intUno + intDos + intTres + intQuatro;
  return sum / 4;
};
console.log(averageOfFour(10, 4, 12, 3)); // 7.25
console.log(averageOfFour(-20, 50, 4, 21)); // 13.75
console.log(averageOfFour(10, 4, 12, 3)); // 7.25
console.log(averageOfFour(5, 5, 3, 7)); // 5

/*
Write a function `numberChange` that accepts a number as an argument. The function should return
half the number if it is even. The function should return double the number if it is odd.
*/

let numberChange = (numeroUno) => {
  if (numeroUno % 2 === 0) {
    return numeroUno / 2;
  } else {
    return numeroUno * 2;
  }
};
console.log(numberChange(6)); // 3
console.log(numberChange(7)); // 14
console.log(numberChange(16)); // 8
console.log(numberChange(21)); // 42

/*
Write a function `contains(str1, str2)` that accepts two strings as arguments. The function should
return a boolean indicating whether or not `str2` is contained within `str1`. The function should
ignore any differences in capitalization.
*/

let contains = (strang1, strang2) => {
  let one = strang1.toLowerCase();
  let two = strang2.toLowerCase();
  if (one.includes(two)) {
    return true;
  } else {
    return false;
  }
};

console.log(contains('caterpillar', 'pill')); // true
console.log(contains("lion's share", 'on')); // true
console.log(contains('SORRY', 'or')); // true
console.log(contains('tangent', 'gem')); // false
console.log(contains('clock', 'ok')); // false
