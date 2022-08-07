import fs from 'fs';
import assert from 'assert';
import { parse } from 'csv-parse/sync';
const movies = fs.readFileSync('top_movies.csv').toString();

// What is the highest grossing movie from Universal Pictures, domestically?

function parseMovies(array) {
  return parse(array, {
    columns: true,
    skip_empty_lines: true,
  });
}

// find movies made by universal
function universalPictures(data) {
  let universal = [];
  for (let rows of data) {
    let distributor = rows.Distributor;
    if (distributor === 'Universal Pictures') {
      universal.push(rows);
    }
  }
  return universal;
}

// console.log(universalPictures(parseMovies(movies)));
// console.log(parseMovies(movies));

// find the us sales of all the movies in universal
function domesticSales(universal) {
  let sales = [];
  for (let rows of universal) {
    sales.push(parseInt(rows['US Sales']));
  }
  return sales;
}

// find the highest domestic sales in the US
function topSales(sales) {
  const blockBuster = Math.max(...sales);
  return blockBuster;
}

console.log(topSales(domesticSales(universalPictures(parseMovies(movies)))));
