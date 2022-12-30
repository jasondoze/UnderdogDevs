const getMinMax = (array) => {
  return {
    min: Math.min(...array),
    max: Math.max(...array),
  };
};
console.log(getMinMax([1, 2, 4, 3, 78, 4, 9]));
