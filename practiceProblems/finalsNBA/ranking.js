import fs from 'fs';
import assert from 'assert';
import { parse } from 'csv-parse/sync';

const nbaFinals = fs.readFileSync('nbaFinals.csv').toString();

function parseMVP(str) {
  return parse(str, {
    columns: true,
    skip_empty_lines: true,
  });
}

function rankingMVP(data) {
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
// console.log(rankingMVP(parseMVP(nbaFinals)));

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

// return counts

function moreThanOne(wins) {
  for (const number in wins) {
    if (wins[number] > 1) {
      console.log(wins[number]);
    }
  }
}

function computeMvpCounts(str) {
  let parsed = parseMVP(str);
  let ranked = rankingMVP(parsed);
  let winners = mvpCounts(ranked);

  return moreThanOne(winners);
}

// Print out a ranking of who has won the MVP more than once,
// by times won, e.g. this output:
console.log(computeMvpCounts(nbaFinals));

// var parsed = parseMVP(nbaFinals);
// var ranked = rankingMVP(parsed);
// var counted = mvpCounts(ranked);

// if the MVP isn't there then it doesn't get counted
// Jacob's question:  which of your three functions should you update the code in
// Jasons answer: ranking mvp
// come up with a godo answer and don't implement
// if the mvp column has no value, disregard the data
// if (mvp.length === 0) {
//   break;
// }

// Other homework: think about how display should work

// console.log(computeMvpCounts(nbaFinals));
// console.log(parseMVP(nbaFinals));
// console.log(rankingMVP(parseMVP(nbaFinals)));

// console.log(mvpCounts(rankingMVP(nbaFinals)));
