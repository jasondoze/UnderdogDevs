const fill = (arraySize, value) => {
  let result = [];
  for (let i = 0; i < arraySize; i++) {
    result.push(value);
  }
  return result;
};
const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)); // ['a', 'a', 'a']
