// for each
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach((veggie, index) => {
  console.log(`${index}. ${veggie}`);
});

const nums = [0, 10, 20, 30, 40, 50];
let result = nums.filter((num) => {
  return num > 20;
});
console.log(result); // [30,40,50]

let mapper = [0, 10, 20, 30, 40, 50].map((num) => {
  return num / 10;
});
console.log(mapper); // [ 0, 1, 2, 3, 4, 5 ]



// convert an boject to an array
const resultArr = [];
const drone = {
  speed: 100,
  color: 'yellow',
};
const droneKeys = Object.keys(drone);
droneKeys.forEach((key) => {
  resultArr.push(key, drone[key]);
});
console.log(resultArr); // ['speed',100,'color','yellow']
