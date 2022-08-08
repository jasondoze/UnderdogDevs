import fs from 'fs';
import assert from 'assert';
import { parse } from 'csv-parse/sync';
const movies = fs.readFileSync('top_movies.csv').toString();

function parseMovies(array) {
  return parse(array, {
    columns: true,
    skip_empty_lines: true,
  });
}

// What distributor has the most films on this list?

function topDistributor(data) {
  // create empty distributor count obj

  const distArr = [];
  let distCount = {};
  for (const rows of data) {
    let distributor = rows.Distributor;
    distArr.push(distributor);
  }
  for (const element of distArr) {
    if (distCount[element]) {
      distCount[element] += 1;
    } else {
      distCount[element] = 1;
    }
  }
  // if the value is the largest in the obj, return the key using .reduce
  return Object.keys(distCount).reduce((a, b) => distCount[a] > distCount[b] ? a : b);
}
console.log(topDistributor(parseMovies(movies)));

/* 
{Paramount: 4,
 Warner Bros: 8
}   
*/
