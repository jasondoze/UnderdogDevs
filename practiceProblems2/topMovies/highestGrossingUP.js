import fs from 'fs';
const topMovies = fs
  .readFileSync('../top_movies.csv')
  .toString()
  .toLowerCase()
  .split('\r\n');

// What is the highest grossing movie from Universal Pictures, domestically?
// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating

const highestGrossing = (array) => {
  let movies = [];
  for (let i = 1; i < array.length; i++) {
    const [title, distributor, released, sales] = array[i].split(',');
    movies.push({ title, distributor, released, sales: Number(sales) });
  }
  movies.sort((a, b) => b.sales - a.sales);
  return movies[0];
};
console.log(highestGrossing(topMovies));
