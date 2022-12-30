// capitalize the first letters in words of a string

const capitalize = (sentence) => {
  return sentence
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};
console.log(capitalize('hi there pilgrim'));

const capital = (sentence) => {
  return sentence
    .split(' ')
    .reduce(
      (prev, current) =>
        `${prev} ${current[0].toUpperCase() + current.slice(1)}`,''
    );
};
console.log(capital('hi there pilgrim'));

const capitale = (sentence) => {
  const words = [];
  for (let word of sentence.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
};
console.log(capitale('hi there pilgrim'));
