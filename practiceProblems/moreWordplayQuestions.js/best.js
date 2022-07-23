const assert = require('assert');

/*The value null is written with a literal: null. null is not an 
  identifier for a property of the global object, like undefined can be. 
  Instead, null expresses a lack of identification, indicating that
   a variable points to no object. In APIs, null is often retrieved in a 
   place where an object can be expected but no object is relevant.*/

/*
    Best should return the longest of two strings.
    If the strings are of equal length, return current.
    Null strings should be considered to have length -1.

    This means that if current is null, we should return candidate.
*/

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

testBest();
console.log("All tests passed 🎉");
