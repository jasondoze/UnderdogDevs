const fs = require('fs');
const nbaFinalsArray = fs
  .readFileSync('nbaFinals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
console.log(nbaFinalsArray);
//  Write a function that takes as an argument a team name and
// returns an array of all of the years the team has won the NBA finals.
function yearWinner(teamName) {
  let years = [];
  for (const row of nbaFinalsArray) {
    const element = row.split(',');
    const year = parseInt(element[0]);
    const team = element[1];
    if (team === teamName) {
      years.push(year);
    }
  }
  return years;
}

console.log(yearWinner('MINNEAPOLIS LAKERS'));

// const nbaInfoCSV = require('csvtojson');
// nbaInfoCSV()
//   .fromFile('nbaFinals.csv')

//   .then((stats) => {
//     // users is a JSON array
//     // log the JSON array

//     const yearWinner = (winner, teamName) => {
//       let winners = [];
//       for (let i = 0; i < winner.length; i++) {
//         if (teamName === winner[i].Winner) {
//           winners.push(winner[i].Year);
//         }
//       }
//       return winners;
//     };
//     console.log(yearWinner(stats, 'Boston Celtics'));
//   })
//   .catch((err) => {
//     // log error if any
//     console.log(err);
//   });

//  Write a function that takes as an argument a team name and
// returns an array of all of the years the team has won the NBA finals.
