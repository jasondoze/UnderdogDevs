// Find the common words
// Your function must accept 2 arrays, then return the common words from each.
// So, a new array containing the words which occur at least once in each of the
// supplied arrays must be returned back.

// Words that are most common throughout both of the arrays should be returned first.

// To make this JavaScript array exercise more interesting, your function could also
// accept an array containing n arrays, and compare all of these arrays, instead
// of just the 2.

const findCommonWords = (firstArray, secondArray) => {
  // your code
  let result = [];
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i].includes(secondArray[j])) {
        result.push(firstArray[i]);
      }
    }
  }
  return result;
};

const firstArray = ['dog', 'cat', 'parrot'];
const secondArray = ['lizard', 'rat', 'cat'];
console.log(findCommonWords(firstArray, secondArray)); // ["cat"]
