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
  let oldestMovies = [];
  let yearArr = [];
  let earliestYear = [];
  for (let rows of data) {
    let parseYears = parseInt(rows['Release Date']);
    yearArr.push(parseYears);
  }
  let min = Math.min(...yearArr);
  earliestYear.push(min);

  for (let movies of data) {
    let title = movies.Title;
    let year = parseInt(movies['Release Date']);
    oldestMovies.push({ title, year });
    if (earliestYear == year) {
      console.log(title, year);
    }
  }
}

console.log(oldestMovie(parseMovies(movies)));
