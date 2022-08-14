import { parse } from 'csv-parse/sync';
import fs from 'fs';
const movies = fs.readFileSync('top_movies.csv').toString();

// What is the distribution of ratings? (How many are PG, PG-13, R, etc.?)
function parseMovies(array) {
  return parse(array, {
    columns: true,
    skip_empty_lines: true,
  });
}

function ratingsDist(data) {
  let ratingsObj = {};
  let ratingsArr = [];
  for (let rows of data) {
    let distributors = rows.Rating;
    ratingsArr.push(distributors);
  }
  for (let dists of ratingsArr) {
    if (!ratingsObj[dists]) {
      ratingsObj[dists] = 1;
    } else {
      ratingsObj[dists] += 1;
    }
  }
  return ratingsObj
}

console.log(ratingsDist(parseMovies(movies)));
