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

const dreamWork = (array) => {
  const dreamDistro = array.slice(1).reduce((distObj, rows) => {
    const [title, distributor] = rows.split(',');
    if (
      distributor === 'DREAMWORKS' ||
      distributor === 'DREAMWORKS DISTRIBUTION'
    ) {
      distObj[title] = distributor;
    }
    return distObj;
  }, {});
  return Object.entries(dreamDistro);
};
console.log(dreamWork(topMovies));
