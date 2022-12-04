const fs = require('fs');
const nbaFinalsArray = fs
  .readFileSync('nbaFinals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
console.log(nbaFinalsArray);

//  Write a function that takes as an argument a team name and
// returns an array of all of the years the team has won the NBA finals.
// Year,Winner,Loser,Score,MVP

class TeamWinners {
  constructor(year, winner, loser, score, mvp) {
    this.year = year;
  }
}
