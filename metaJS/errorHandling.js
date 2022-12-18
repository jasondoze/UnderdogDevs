let addTwoNums = (a, b) => {
  try {
    if (typeof a !== 'number') {
      throw new ReferenceError('the first argument is not a number');
    } else if (typeof b !== 'number') {
      throw new ReferenceError('the second argument is not a number');
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log('Error', err);
  }
};
// addTwoNums(5, '5');
// console.log('it still works');

function letterFinder(word, match) {
  let condition1 = typeof word == 'string' && word.length >= 2;
  let condition2 = typeof match == 'string' && match.length === 1;
  if (condition1 && condition2) {
    for (i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log('Found the', match, 'at', i);
      } else {
        console.log('---No match found at', i);
      }
    }
  } else {
    console.log('please pass correct arguments to the function');
  }
}
// letterFinder([], []);
// letterFinder('cat', 'c');


// try {
//   throw new Error();
//   console.log('Hello');
// } catch(err) {
//   console.log('Goodbye');
// }
// Goodbye

// function add(a, b) {
//   console.log(a + b)
// }

// add(3, "4");
// 34

var str = "Hello";
str.match("jello");
// null