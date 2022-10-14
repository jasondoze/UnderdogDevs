// splice method changes the array thats called
const numbers = [1, 2, 3, 4, 5];

// const deleted = numbers.splice(2, 3);
// console.log(deleted);

const addedDeleted = numbers.splice(2, 0, 6, 7);

console.log(addedDeleted, numbers);
