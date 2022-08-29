// Write a function called "convertScoreToGrade".

// Given a score, "convertScoreToGrade" returns a string representing
// the letter grade corresponding to the given score.

// (100 - 90) --> 'A'
// (89 - 80) --> 'B'
// (79 - 70) --> 'C'
// (69 - 60) --> 'D'
// (59 - 0) --> 'F'
// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// var output = convertScoreToGrade(91);
// console.log(output); // --> 'A'

let convertScoreToGrade = (num) => {
  if (num > 100 || num < 0) {
    console.log('invalid score');
  } else if (num < 60) {
    return 'F';
  } else if (num < 70) {
    return 'D';
  } else if (num < 80) {
    return 'C';
  } else if (num < 90) {
    return 'B';
  } else {
    return 'A';
  }
};
console.log(convertScoreToGrade(91));
