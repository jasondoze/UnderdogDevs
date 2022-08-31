/*
Given a string of even and odd numbers, find which is the sole even number
// or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

detectOutlierValue('2 4 7 8 10'); // => 3 - Third number is odd, while the
// rest of the numbers are even
detectOutlierValue('1 10 1 1'); //=> 2 - Second number is even, while the
// rest of the numbers are odd
*/

let detectOutlierValue = (str) => {
  let evens = [];
  let odds = [];
  let numStr = str.split(' ');
  for (let i = 0; i < numStr.length; i++) {
    let number = Number(numStr[i]);
    if (number % 2 === 0) {
      evens.push({
        value: number,
        index: i + 1,
      });
    } else {
      odds.push({
        value: number,
        index: i + 1,
      });
      console.log(odds);
    }
  }
  if (evens.length === 1) {
    return evens[0].index;
  } else {
    return odds[0].index;
  }
};
console.log(detectOutlierValue('2 4 7 8 10'));
