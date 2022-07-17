const fs = require('fs');
const nbaFinalsArray = fs
  .readFileSync('nbaFinals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');

//  Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.

function sooo(nbaFinals) {}

console.log(nbaFinalsArray);
console.log('jello');
