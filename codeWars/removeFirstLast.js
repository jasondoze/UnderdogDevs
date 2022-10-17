// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = (str) => {
  let newString = '';
  let splitter = str.split('');
  for (let i = 1; i < splitter.length - 1; i++) {
    newString += splitter[i];
  }
  return newString;
};

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');

// with slice
const removeChar2 = (str) => {
  return str.slice(1, -1);
};

console.log(removeChar2('eloquent'), 'loquen');
console.log(removeChar2('country'), 'ountr');
console.log(removeChar2('person'), 'erso');
console.log(removeChar2('place'), 'lac');
console.log(removeChar2('ooopsss'), 'oopss');
