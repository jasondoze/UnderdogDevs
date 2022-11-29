const numbers = [1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8];
console.log(numbers.length);
const unique = [...new Set(numbers)];
console.log(unique);
