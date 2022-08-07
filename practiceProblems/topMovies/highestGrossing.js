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

// find movies made by universal and their sales
function universalPictures(data) {
  let ticketSalesArr = [];

  for (let rows of data) {
    let distributor = rows.Distributor;
    let ticketSales = parseInt(rows['US Sales']);
    let movieTitleString = rows.Title;

    if (distributor === 'Universal Pictures') {
      ticketSalesArr.push(ticketSales);
      let max = Math.max(...ticketSalesArr);
      if (max === ticketSales) return movieTitleString;
    }
  }
}

console.log(universalPictures(parseMovies(movies)));
