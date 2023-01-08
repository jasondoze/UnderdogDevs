import fs from 'fs';
const topMovies = fs
  .readFileSync('../top_movies.csv')
  .toString()
  .toLowerCase()
  .split('\r\n');

// What is the highest grossing movie from Universal Pictures, domestically?
// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating

const highestGrossing = (array) => {
  let movies = {};
  for (const rows of array.slice(1)) {
    const [title, distributor, _, sales] = rows.split(',');
    if (distributor === 'universal pictures') {
      movies[title] = sales;
    }
  }
  return Object.entries(movies)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1);
};
console.log(highestGrossing(topMovies));

const highGross = (array) => {
  const grossUp = array.slice(1).reduce((mostGross, rows) => {
    const [title, distributor, _, sales] = rows.split(',');
    if (distributor === 'universal pictures') {
      mostGross[title] = sales;
    }
    return mostGross;
  }, {});

  return Object.entries(grossUp)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1);
};
console.log(highGross(topMovies));
