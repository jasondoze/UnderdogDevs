// Write a simple JavaScript program to join all elements of
// the following array into a string. Go to the edito

let joinElements = (array) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(array[i])

  }
  return result.join('"+"')
};

console.log(joinElements(['Red', 'Green', 'White', 'Black']));
