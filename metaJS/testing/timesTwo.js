// Task 1: Code the timesTwo function declaration

function timesTwo(number) {
  return number * 2
}

// Task 2: Export the timesTwo function as a module
module.exports = timesTwo;

/*
jasondoze@jd testing % npm test

> testing@1.0.0 test
> jest

 PASS  ./timesTwo.test.js
  ✓ returns the number times 2 (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.549 s
Ran all test suites.
jasondoze@jd testing % 
*/