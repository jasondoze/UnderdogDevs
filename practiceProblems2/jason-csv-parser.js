// templated from https://csv.js.org/parse/api/sync/

import assert from 'assert';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
const nbaFinalsArray = fs.readFileSync('./jason-csv-parser.js').toString();
const nbaFinalsObject = parse(nbaFinalsArray);



const input = `
"key_1","key_2"
"value 1","value 2"
`;
const records = parse(input, {
  columns: true,
  skip_empty_lines: true
});

//The code parses the input string and returns an object with a single
// property called columns.
function parseMVP(s) {
  return parse(s, {
    columns: true,
    skip_empty_lines: true,
  });
}
console.log(parseMVP(input));
console.log(nbaFinalsObject);