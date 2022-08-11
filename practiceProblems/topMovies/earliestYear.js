import { parse } from 'csv-parse/sync';
import fs from 'fs';
const movies = fs.readFileSync('top_movies.csv').toString();

// What is the earliest year on this list,
// and what were the films from that year?
function parseMovies(array) {
  return parse(array, {
    columns: true,
    skip_empty_lines: true,
  });
}

function oldestMovie(data) {
  let releaseYears = [];
  let minYears = [];
  for (let rows of data) {
    let title = rows.Title;
    let year = rows['Release Date'];
    releaseYears.push();
    console.log(releaseYears);
  }
}

console.log(oldestMovie(parseMovies(movies)));
