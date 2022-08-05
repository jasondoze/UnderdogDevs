import fs from 'fs';
import assert from 'assert';
import { parse } from 'csv-parse/sync';

const movies = fs.readFileSync('top_movies.csv').toString();

// What movies on this list were distributed by DreamWorks?
function parseMovies(str) {
  return parse(str, {
    columns: true,
    skip_empty_lines: true,
  });
}
// console.log(parseMovies(movies));

function movieDistributors(data) {
  let dreamWorks = [];
  for (const rows of data) {
    const movieName = rows.Title;
    const distributor = rows.Distributor;
    if (distributor === 'DreamWorks Distribution' || distributor === "DreamWorks") {
      dreamWorks.push(movieName);
    }
  }
  return dreamWorks;
}
console.log(movieDistributors(parseMovies(movies)));
