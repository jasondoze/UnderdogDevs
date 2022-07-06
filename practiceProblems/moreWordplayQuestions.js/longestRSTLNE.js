const fs = require("fs");
const text = fs.readFileSync("sowpods.txt");
const sowpods = text.toString().toLowerCase().split("\n");
const assert = require("assert");

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
function longestRSTLNE(words) {
  // console.log(typeof words);
  if (Array.isArray(words)) {
    console.log("words is an array");
  }

  if (words.length === 0) {
    return null;
  }

  if (words !== "") {
    return null;
  }

  let longest = "";

  let result = [];
  const letters = ["r", "s", "t", "l", "n", "e"];

  for (let i = 0; i < words.length; i++) {
    let currWord = words[i];
    let wordArray = currWord.split("");
    // for every letter in the current word, is that included in letters
    if (wordArray.every((letter) => letters.includes(letter))) {
      result.push(currWord);
    }
    // broken
    else if (wordArray.every((letter) => !letters.includes(letter))) {
      return null;
    }
  }
  for (let j = 0; j < result.length; j++) {
    if (result[j].length > longest.length) {
      longest = result[j];
      // console.log(longest);
      // console.log(typeof longest);
    }
  }
  return longest;
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
function testRESTLNE() {
  // assert.deepEqual("", "");
  // passes although it really shouldn't
  // assert.deepEqual(longestRSTLNE(''), '');

  // new tests
  assert.deepEqual(longestRSTLNE([]), null, "wrong answer for empty array");
  assert.deepEqual(longestRSTLNE(["x"]), null, "wrong answer for x");
  assert.deepEqual(longestRSTLNE(["x", "y"]), null, "wrong answer for x, y");
  assert.deepEqual(longestRSTLNE(["2"]), null, "answer for number entry");
  assert.deepEqual(longestRSTLNE(["../", "7"]), null, "answer for other keyboard input");

  //
  // assert.deepEqual(
  //   longestRSTLNE(["eel", "entente", "ententes", "letterers"]),
  //   "letterers"
  // );
  // assert.deepEqual(
  //   longestRSTLNE(["eel", "entente", "ententes", "letterers", "x"]),
  //   "letterers"
  // );

  // assert.deepEqual(
  //   longestRSTLNE(["eel", "entente", "ententesees", "letterers"]),
  //   "letterers"
  // );

  console.log("all tests passed");
}
testRESTLNE();
