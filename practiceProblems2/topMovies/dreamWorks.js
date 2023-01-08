import fs from 'fs';
const topMovies = fs
  .readFileSync('../top_movies.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');

// What movies on this list were distributed by DreamWorks?
// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating

const dreamWorkz = (array) => {
  for (const rows of array.slice(1)) {
    const [title, distributor] = rows.split(',');
    if (
      distributor === 'DREAMWORKS' ||
      distributor === 'DREAMWORKS DISTRIBUTION'
    ) {
      console.log(title);
    }
  }
};
dreamWorkz(topMovies);

const dreamWorkZ = (array) => {
  let dreamerMovies = {};
  for (const rows of array.slice(1)) {
    const [title, distributor] = rows.split(',');
    if (
      distributor === 'DREAMWORKS' ||
      (distributor === 'DREAMWORKS DISTRIBUTION' && !dreamerMovies[title])
    ) {
      dreamerMovies[title] = distributor;
    }
  }
  return Object.keys(dreamerMovies);
};
console.log(dreamWorkZ(topMovies));
