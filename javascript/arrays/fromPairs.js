const fromPairs = (array) => {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let key = array[i][0];
    let value = array[i][1];
    obj[key] = value;
  }
  return obj;
};
const data = [
  ['a', 1],
  ['b', 2],
];
console.log(fromPairs(data)); // { 'a': 1, 'b': 2 }
