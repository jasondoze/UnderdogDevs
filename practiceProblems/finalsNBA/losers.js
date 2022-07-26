const fs = require('fs');
const nbaFinalsArray = fs
  .readFileSync('nbaFinals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
// console.log(nbaFinalsArray);

// Which teams have made it to the NBA finals but have never won?

// check if any losing teams are also in the winning teams array
function losersT(stats) {
  let neverWon = [];
  let losers = [];
  let winners = [];
  for (let i = 1; i < stats.length; i++) {
    let rows = stats[i].split(',');
    let winningTeam = rows[1];
    winners.push(winningTeam);
    let losingTeam = rows[2];
    losers.push(losingTeam);
    // if the losing team is not in winners, push to the losers array
  }
  for (let j = 0; j < losers.length; j++) {
    let candidate = losers[j];
    if (!winners.includes(candidate)) {
      if (!neverWon.includes(candidate)) {
        neverWon.push(candidate);
      }
    }
  }

  return neverWon;
}

console.log(losersT(nbaFinalsArray));
