// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

let removeShortWords = (sent) => {
  let newSent = [];
  let splite = sent.split(' ');
  for (let i = 0; i < splite.length; i++) {
    if (splite[i].length >= 4) {
      newSent.push(splite[i]);
    }
  }
  return newSent.join(' ');
};

console.log(removeShortWords('knock on the door will you')); // 'knock door will'
console.log(removeShortWords('a terrible plan')); // 'terrible plan'
console.log(removeShortWords('run faster that way')); // 'faster that'