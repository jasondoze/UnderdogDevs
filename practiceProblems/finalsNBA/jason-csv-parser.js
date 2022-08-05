// templated from https://csv.js.org/parse/api/sync/
import assert from 'assert';
import { parse } from 'csv-parse/sync';
// const fs = require('fs');
import fs from 'fs';
const nbaFinalsArray = fs.readFileSync('nbaFinals.csv').toString();
const nbaFinalsObject = parse(nbaFinalsArray);

// console.log(nbaFinalsObject);

const input = `
"key_1","key_2"
"value 1","value 2"
`;
const records = parse(input, {
  columns: true,
  skip_empty_lines: true
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
console.log(parseMVP(input));
