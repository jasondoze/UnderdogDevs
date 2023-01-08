import fs from 'fs';
const nbaFinalsArray = fs
  .readFileSync('../nba_finals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
console.log(nbaFinalsArray);

// Which teams have made it to the NBA finals but have never won?
// Year,Winner,Loser,Score,MVP
function losersT(array) {
  // let neverWon = [];
  let losers = [];
  let winners = [];
  for (const row of array.slice(1)) {
    const [, winner, loser] = row.split(',')
    winners.push(winner);
    losers.push(loser);
  }
  // Filter the `losers` array to return only teams that are not in the `winners` array
  const neverWon = losers.filter((team) => !winners.includes(team));
  // Create a new Set from the filtered array
  const teamSet = new Set(neverWon)

  return teamSet;

}
console.log(losersT(nbaFinalsArray));