const reverse = (array) => {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};
const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]
