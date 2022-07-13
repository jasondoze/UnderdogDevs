const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const words = text.toString().toLowerCase().split("\n");

// create a dictionary object like this:
// {
// name: word[i],
//   letters; [all the letters in the word in order in an array]
// letterCount: { all the letters in the word  and their counts}
// }

function createDictionary(words) {
  let dictionary = {};
let noRepeat = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let letters = word.split("");
    let letterCount = {};
    for (let j = 0; j < letters.length; j++) {
      let letter = letters[j];
      if (!letterCount[letter]) {
        letterCount[letter] = 1;
      } else {
        letterCount[letter]++;
      }
    }
    dictionary[word] = {
      // letters: letters,
      letterCount: letterCount,
    };
    // if the values of the letterCount object are the same, then the word is a no repeat word, push it to the noRepeat array
    if (Object.values(dictionary[word].letterCount).every(value => value === 1)) {
      noRepeat.push(word);
    }
  }
// find the longest word in the noRepeat array
  let longest = noRepeat.reduce((a, b) => {
    return a.length > b.length ? a : b;
  }
  );
  return longest;
}
console.log(createDictionary(words));



