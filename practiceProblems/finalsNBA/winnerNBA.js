const fs = require('fs');
const nbaFinalsArray = fs
  .readFileSync('nbaFinals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');

//  Write a function that takes as an argument a year and returns the winner of the NBA finals that year.

function winnerNBA(yr) {
  for (const row of nbaFinalsArray) {
    const element = row.split(',');
    const year = parseInt(element[0]);
    const team = element[1];
    if (year === yr) {
      return team;
    }
  }
}

console.log(winnerNBA(1972));
