const items = [
  { name: 'bike', price: 100 },
  { name: 'tv', price: 200 },
  { name: 'album', price: 10 },
  { name: 'book', price: 5 },
  { name: 'phone', price: 500 },
  { name: 'computer', price: 1000 },
  { name: 'keyboard', price: 25 },
];

const filtered = items.filter((item) => {
  return item.price <= 100;
});

console.log(filtered);

// use filter to get even nums
const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter((item) => {
  return item % 2 === 0;
});
console.log(even);

// remove ages under 18
const people = [
  {
    name: 'Jason',
    age: 22,
  },
  {
    name: 'Melina',
    age: 20,
  },
  {
    name: 'Sydney',
    age: 13,
  },
];

const adults = people.filter((person) => {
  return person.age < 18;
});

console.log(adults);

// remove duplicates from the array
const nums = [1, 2, 2, 3, 2, 3, 3, 4, 6, 7, 7, 8];

const dupes = nums.filter((value, index, array) => {
  // indexof return the first instance of the index, so the second 2 returns false
  return array.indexOf(value) === index;
});

console.log(dupes);
