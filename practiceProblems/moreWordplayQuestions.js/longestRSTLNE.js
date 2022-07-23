const fs = require('fs');
const text = fs.readFileSync('sowpods.txt');
const sowpods = text.toString().toLowerCase().split('\n');
const assert = require('assert');

/*
What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.
*/

// allWords = []
// allWords.length = 0
// i = 0
// i < allWords.length

// x = a < b
// typeof(x)

/*
  From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
for statement
A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

A for statement looks as follows:

for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement

Question: for (let i = 0; i < allWords.length; i++)
  initial: let i = 0
  condition: i < allWords.length
  increment: i++

When a for loop executes, the following occurs:

The initializing expression initialExpression, if any, is executed. 
The conditionExpression expression is evaluated. 
   If the value of conditionExpression is true, the loop statements execute. 
   Otherwise, the for loop terminates. (If the conditionExpression expression
   is omitted entirely, the condition is assumed to be true.)

Question: if i = 0 and allWords = [], what does i < allWords.length evaluate to?
Answer: False

  */

// for this part of the session we've decided words=[] (because we're working on test with longestRSTLNE([]))
// this takes an array of strings and returns a string
// if no word can be made, return null

function best(current, candidate) {
  if (current === null) {
    return candidate;
  }

  if (candidate === null) {
    return current;
  }

  // Q: why is it okay to compare candidate.length (an integer) to current (a string, or null)
  // A: doing some research, this was just left in research states
  if (candidate.length > current.length) {
    return candidate;
  }
  return current;
}

function isGoodWord(word) {
  const letters = ['r', 's', 't', 'l', 'n', 'e'];
  let wordArray = word.split('');
  // for every letter in the current word, is that included in letters
  return wordArray.every((letter) => letters.includes(letter));
}

function longestRSTLNE(words) {
  // filters words for just those made of LSTRNE
  filtered = words.filter(word => isGoodWord(word));
  // chooses the longest word of filtered words
  return filtered.reduce((a, b) => best(a, b), null);
}

function longestRSTLNE2(words) {
  /*The value null is written with a literal: null. null is not an 
  identifier for a property of the global object, like undefined can be. 
  Instead, null expresses a lack of identification, indicating that
   a variable points to no object. In APIs, null is often retrieved in a 
   place where an object can be expected but no object is relevant.*/

  // console.log(typeof null);

  let filtered = [];
  const letters = ['r', 's', 't', 'l', 'n', 'e'];

  for (let i = 0; i < words.length; i++) {
    let currWord = words[i];
    let wordArray = currWord.split('');
    // for every letter in the current word, is that included in letters
    if (wordArray.every((letter) => letters.includes(letter))) {
      filtered.push(currWord);
    }
  }

  let longest = null;
  for (let j = 0; j < filtered.length; j++) {
    longest = best(longest, filtered[j]);
  }
  return longest;


  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  // return filtered.reduce((a, b) => best(a, b), null);
}



// console.log(longestRSTLNE(words));

/* longestRSTLNE can be seen as 
  1. find all words made up of only RSTLNE"
  2. return the longest word from (1)

  1. find all words made up of only RSTLNE
  1a. If there are no matching words, return null <-- homework
  2. return the longest word from (1)

Jacob's request: if (1) has no words, then return null



Homework: fix code
Hint: your code already splits up parts one and two, how can you check after part one whether there are no matching words

Stretch homework: more tests cases, with english descriptions
*/

/*
  longestRSTLNE(stringArray) returns the longest string in stringArray which is formed only of the letters r,s,t,l,n,e 
  longest(stringArray) returns the longest string in stringArray
*/

/*
  if we want best() to return the best string in the context of longestRSTLNE, when current=null and candidate="r", 
  what should we return?
*/


// fix the best function so that test best passes
function testBest() {
  actual = best(null, 'r');
  expected = 'r';

  assert.deepEqual(actual, expected);
  assert.deepEqual(best('r', null), 'r');

  assert.deepEqual(best('r', 'rr'), 'rr');
  assert.deepEqual(best('rr', 'r'), 'rr');
  assert.deepEqual(best('rs', 'rl'), 'rs');
}

function testRSTLNE() {
  assert.deepEqual(longestRSTLNE(['r']), 'r', "expected f(['r']) => 'r'");
  assert.deepEqual(
    longestRSTLNE(['r', 'xa']),
    'r',
    "expected f(['r', 'xa']) => 'r'"
  );
  assert.deepEqual(
    longestRSTLNE(['r', 'xa', 'rst']),
    'rst',
    "expected f(['r', 'xa', 'rst']) => 'rst'"
  );

  assert.deepEqual(longestRSTLNE([]), null, 'expected f([]) = null');
  assert.deepEqual(longestRSTLNE(['']), '', "expected f(['']) = ''");
  assert.deepEqual(longestRSTLNE(['x']), null, "expected f(['x']) = null");
  assert.deepEqual(longestRSTLNE(['x', 'y']), null);
  assert.deepEqual(longestRSTLNE(['2']), null);
  assert.deepEqual(
    longestRSTLNE(['../', '7']),
    null,
    'answer for other keyboard input'
  );

  //
  assert.deepEqual(
    longestRSTLNE(["eel", "entente", "ententes", "letterers"]),
    "letterers"
  );
  assert.deepEqual(
    longestRSTLNE(["eel", "entente", "ententes", "letterers", "x"]),
    "letterers"
  );

  // this test is configured to fail!
  // assert.deepEqual(
  //   longestRSTLNE(["eel", "entente", "ententesees", "letterers"]),
  //   "letterers" // should actually be ententesees!
  // );
}
testBest();
testRSTLNE();
console.log('all tests passed 🎉');


