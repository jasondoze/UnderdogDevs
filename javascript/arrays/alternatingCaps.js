// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

let alternatingCaps = (sentenceString) => {
  let newbie = [];
  let splitty = sentenceString.split(' ');
  for (let i = 0; i < splitty.length; i++) {
    if (i % 2 === 0) {
      newbie.push(splitty[i].toLowerCase());
    } else {
      newbie.push(splitty[i].toUpperCase());
    }
  }
  return newbie.join(' ');
};

console.log(alternatingCaps('take them to school')); // 'take THEM to SCHOOL'
console.log(alternatingCaps('What did ThEy EAT before?')); // 'what DID they EAT before?'