import fs from 'fs';
const nbaFinalsArray = fs
  .readFileSync('../nba_finals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
// console.log(nbaFinalsArray);

// Write a function that takes as an argument a year and returns the winner of the NBA finals that year.

const yearWinner = (array, targetYear) => {
  let result = [];
  for (const rows of array) {
    const columnSplit = rows.split(',');
    let year = parseInt(columnSplit[0]);
    let team = columnSplit[1];
    if (year == targetYear) {
      result.push(year);
      result.push(team);
    }
  }
  return result;
};
console.log(yearWinner(nbaFinalsArray, '1998'));
// console.log(nbaFinalsArray);
