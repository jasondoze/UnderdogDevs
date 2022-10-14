// sort by unicode values
const people = ['Jason', 'Melina', 'Doris', 'Sydney', 'Monkey'];

const alphabetic = people.sort();

console.log(alphabetic);

const nums = [10, 3, 54, 88, 933, 44];

const sorted = nums.sort((a, b) => {
  return b - a;
});
console.log(sorted);

const products = [
  {
    name: 'laptop',
    price: 1000,
    count: 30,
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

// sort array by the price
let sortedArr = products.sort((a, b) => {
  return a.price - b.price;
});
console.log(sortedArr);
