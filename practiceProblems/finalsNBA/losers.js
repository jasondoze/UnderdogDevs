const fs = require('fs');
const nbaFinalsArray = fs
  .readFileSync('nbaFinals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
// console.log(nbaFinalsArray);

// Which teams have made it to the NBA finals but have never won?

// check if any losing teams are also in the winning teams array
function losersT(array) {
  let losers = [];
  for (let i = 0; i < array.length; i++) {
    let rows = array[i].split(',');
    let winners = rows[1];
    let losingTeam = rows[2];
    console.log(winners, 'winners');
    // console.log(losingTeam, 'losers');
    // if the losing team is not in winners, push to the losers array
    if (losingTeam !== winners) {
      losers.push(losingTeam);
    }
  }
  return losers;
}
console.log(losersT(nbaFinalsArray));
