import fs from 'fs';
const nbaFinalsArray = fs
  .readFileSync('../nba_finals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
// console.log(nbaFinalsArray)
// Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
// Year,Winner,Loser,Score,MVP

const yearWinner = (array, targetYear) => {
  // Then, split each item by the comma and take the second part (team name)
  // Return the modified array
  return (
    array
      //  filter the array to only include items that contain the target year
      // split each item by the comma and map the second part (team name)
      .filter((year) => year.split(',')[0] === targetYear)
      .map((team) => team.split(',')[1])
  );
};
console.log(yearWinner(nbaFinalsArray, '1998'));
// console.log(performance.now());
// 75.16609996557236
