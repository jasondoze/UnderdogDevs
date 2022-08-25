const compact = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (
      !array[i] === false ||
      !array[i] === undefined ||
      !array[i] === '' ||
      !array[i] === null
    ) {
      result.push(array[i]);
    }
  }
  return result;
};
const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)); // [1, 2, 3]
