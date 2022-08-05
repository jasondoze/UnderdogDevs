// templated from https://csv.js.org/parse/api/sync/
import assert from 'assert';
import { parse } from 'csv-parse/sync';

const records = parse(input, {
  columns: true,
  skip_empty_lines: true,
});
// assert.deepStrictEqual(
//   records,
//   [{ key_1: 'value 1', key_2: 'value 2' }]
// );
// import assert from 'assert';
// import { parse } from 'csv-parse';
// const input = `
// Year,Winner,Loser,Score,MVP
// 2021,Warriors,Celtics,4-2,Steph Curry
// 2020,Warriors,Lakers,4-1,Klay Thompson
// `;

//The code parses the input string and returns an object with a single
// property called columns.
function parseMVP(s) {
  return parse(s, {
    columns: true,
    skip_empty_lines: true,
  });
}

module.exports = { parseMVP };
// console.log(parseMVP(input));
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

// create a data variable assigned to parseMVP
// create an empty stats object
// for of loop setting a row variable iterating over data
// create a year variable assigned to the Year .row
// create an MVP variable assinged to MVP
// if there is no key in the year yet, stats[year] is set to an empty array
// push the mvp into the stats year array
// function rankingMVP(s) {
//   const data = parseMVP(s);
//   const stats = {};
//   for (const row of data) {
//     const year = row.Year;
//     const mvp = row.MVP;
//     if (!stats[year]) {
//       stats[year] = [];
//     }
//     stats[year].push(mvp);
//   }
//   return stats;
// }

// console.log(rankingMVP(input));
// { '2020': [ 'Klay Thompson' ], '2021': [ 'Steph Curry' ] }

// use the rankingMVP output data to count the number of times each MVP won the finals

// The code starts by declaring a variable called "counts" and initializing it to an empty object.
// The code then loops through each year in the stats array, which is the rankingMVP function's output.
// For each MVP of that year, if there was no count for that MVP yet, then counts[mvp] = 0; will initialize the count to zero.
// If there was already a count for that MVP, then counts[mvp]++; increments the existing value of counts[mvp].
// The return statement returns all of the values from this loop as an object with keys corresponding to each player's name and their respective number of times they were named MVP.
// The code will count the number of MVPs for each year.

// create an empty counts object variable
// use a for in loop to iterate through each year in the stats array, which is the ranking MVP functions output
// use a for of loop to iterate through all mvps of thatfor every MVP of that year, if there was no count for that MVP yet, then counts[mvp] = 0; will initialize the count to zero.
// if there is no count for that mvp yet, then counts at mvp = 0
// if there is a count already, then counts at mvp ++
// function mvpCounts(stats) {
//   const counts = {};
//   for (const year in stats) {
//     for (const mvp of stats[year]) {
//       if (!counts[mvp]) {
//         counts[mvp] = 0;
//       }
//       counts[mvp]++;
//     }
//   }
//   return counts;
// }
// console.log(mvpCounts(rankingMVP(input)));
// assert.deepStrictEqual(
//     records,
//     [{ key_1: 'value 1', key_2: 'value 2' }]
//   );
//   records = parseMVP(input);
/*
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
*/
