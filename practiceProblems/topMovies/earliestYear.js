
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
  // let oldestMovies = [];
  let yearArr = [];
  // let earliestYear = [];
  for (let rows of data) {
    // get the all the years in the data and set to parse years
    let parseYears = parseInt(rows['Release Date']);
    // push all the years into the year array
    yearArr.push(parseYears);
  }
  // determine the minimum year in the year array
  let min = Math.min(...yearArr);
  // that minimum into the earliest year arr

  // iterate over the data and check for the min year equaling the movie year
  for (let i = 0; i < data.length; i++) {
    let title = data[i].Title;
    let movieYear = parseInt(data[i]['Release Date']);
    if (min === movieYear) {
      console.log(title, movieYear);
    }
  }
}

console.log(oldestMovie(parseMovies(movies)));

// for (let films of data) {
//   let title = films.Title;
//   let year = parseInt(films['Release Date']);
//   if (earliestYear == year) {
//     console.log(title, year);
//   }
// }
// return oldestMovies;
