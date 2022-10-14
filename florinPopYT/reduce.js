// reduces down into one return value
const numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum);

// find the largest value in the array of numbers
const nums = [1, 2, 3, 4, 5, 6, 12];

let maxSum = nums.reduce((accumulator, value) => {
  if (accumulator > value) {
    return accumulator;
  } else {
    return value;
  }
}, -Infinity);
// using the lowest number possible -infinity
console.log(maxSum);

// find the value of all products in the store
const store = [
  {
    name: 'laptop',
    price: 1000,
    count: 3,
  },
  {
    name: 'desktop',
    price: 1500,
    count: 4,
  },
  {
    name: 'phone',
    price: 500,
    count: 10,
  },
];

const totalValue = store.reduce((acc, item) => {
  return acc + item.price * item.count;
}, 0);
console.log(totalValue);
