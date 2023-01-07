import fs from 'fs';
const nbaFinalsArray = fs
  .readFileSync('../nba_finals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');

// Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.

const teamWinner = (array, teamName) => {
  let winner = [];
  for (const rows of array) {
    const columns = rows.split(',');
    let year = columns[0];
    let team = columns[1];
    if (team === teamName) {
      winner.push(year);
    }
  }
  return winner;
};
console.log(teamWinner(nbaFinalsArray, 'CHICAGO BULLS'));

const teamWinner2 = (array, teamName) => {
  return array
    .filter((team) => team.split(',')[1] === teamName)
    .map((year) => year.split(',')[0]);
};
console.log(teamWinner2(nbaFinalsArray, 'CHICAGO BULLS'));
