const products = [
  {
    name: 'laptop',
    price: 1000,
    count: 5,
  },
  {
    name: 'desktop',
    price: 1500,
    count: 2,
  },
  {
    name: 'phone',
    price: 500,
    count: 10,
  },
];

const totalProductsValue = products.map((item) => ({
  name: item.name,
  totalValue: item.price * item.count,
}));

console.log(totalProductsValue);

// convert an array of strings to numbers

const string = ['1', '2', '3', '4'];

const numbers = string.map(Number);
console.log(numbers);
