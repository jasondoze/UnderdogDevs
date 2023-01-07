import fs from 'fs';
const nbaFinalsArray = fs
  .readFileSync('../nba_finals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
console.log(nbaFinalsArray);

// Which teams have made it to the NBA finals but have never won?
// Print out a ranking of who has won the MVP more than once, by times won, e.g. this output:
//     - 6 times: Michael Jordan
//     - 3 times: Shaquille O'Neal, LeBron James
//     - 2 times: <etc></etc>
// Year,Winner,Loser,Score,MVP

// const noWin = (array) => {
//   let winners = [];
//   let losers = [];
//   let neverWon = new Set();
//   for (let i = 1; i < array.length; i++) {
//     let columns = array[i].split(',');
//     winners.push(columns[1]);
//     losers.push(columns[2]);
//   }
//   for (const losingTeams of losers) {
//     if (!winners.includes(losingTeams)) {
//       neverWon.add(losingTeams);
//     }
//   }
//   return neverWon;
// };
// console.log(noWin(nbaFinalsArray));

const noWin2 = (array) => {
  const teams = new Set();

  for (const [, winner, loser] of array.slice(1)) {
    teams.add(loser);
    teams.delete(winner);
  }

  return teams;
};

console.log(noWin2(nbaFinalsArray));


console.log(getNeverWon(nbaFinalsArray));

const getMVPRanking = (array) => {
  const mvps = {};

  for (const [, , , , mvp] of array.slice(1)) {
    if (!mvps[mvp]) {
      mvps[mvp] = 0;
    }
    mvps[mvp]++;
  }

  return Object.entries(mvps)
    .sort((a, b) => b[1] - a[1])
    .map(([mvp, times]) => `- ${times} times: ${mvp}`)
    .join('\n');
};

console.log(getMVPRanking(nbaFinalsArray));


const getResults = (array) => {
  const mvps = {};

  for (const row of array.slice(1)) {
    const [, , , , mvp] = row.split(",");
    if (mvp) {
      if (!mvps[mvp]) {
        mvps[mvp] = 0;
      }
      mvps[mvp]++;
    }
  }

  const mvpRanking = Object.entries(mvps)
    .sort((a, b) => b[1] - a[1])
    .filter(([, times]) => times > 1)
    .map(([mvp, times]) => `${times} times: ${mvp}`)
   

  return { mvpRanking };
};

console.log(getResults(nbaFinalsArray));