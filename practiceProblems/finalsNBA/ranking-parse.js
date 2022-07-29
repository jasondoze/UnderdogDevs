// templated from https://csv.js.org/parse/api/sync/

import assert from 'assert';
import { parse } from 'csv-parse/sync';
const input = `
Year,Winner,Loser,Score,MVP
2021,Warriors,Celtics,4-2,Steph Curry
2020,Warriors,Lakers,4-1,Klay Thompson
`;

//The code parses the input string and returns an object with a single
// property called columns.
function parseMVP(s) {
  return parse(s, {
    columns: true,
    skip_empty_lines: true,
  });
}
console.log(parseMVP(input));
/* example input 
Year,Winner,Loser,Score,MVP\n2021,Warriors,Celtics, 4-2,Steph Curry

example output
[{year: 2021, winner: 'Warriors', loser: 'Celtics', score: '4-2', mvp: 'Steph Curry'}]
*/

/* The code parses the input string and creates a new object called data.
It then iterates through each row of data, adding it to an empty stats object 
if there is no such key in the current year.
The code then returns all of the stats objects that are stored in this function.
*/
function rankingMVP(s) {
  const data = parseMVP(s);
  const stats = {};
  for (const row of data) {
    const year = row.Year;
    const mvp = row.MVP;
    if (!stats[year]) {
      stats[year] = [];
    }
    stats[year].push(mvp);
  }
  return stats;
}

console.log(rankingMVP(input));
// { '2020': [ 'Klay Thompson' ], '2021': [ 'Steph Curry' ] }


// use the rankingMVP output data to count the number of times each MVP won the finals
function mvpCounts(stats) {
  const counts = {};
  for (const year in stats) {
    for (const mvp of stats[year]) {
      if (!counts[mvp]) {
        counts[mvp] = 0;
      }
      counts[mvp]++;
    }
  }
  return counts;
}
console.log(mvpCounts(rankingMVP(input)));
// assert.deepStrictEqual(
//     records,
//     [{ key_1: 'value 1', key_2: 'value 2' }]
//   );
//   records = parseMVP(input);
