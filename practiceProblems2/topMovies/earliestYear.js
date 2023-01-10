import fs from 'fs';
const topMovies = fs
  .readFileSync('../top_movies.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating

// What is the earliest year on this list, and what were the films from that year?
// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating
// title, _, release date
const earliestYear = (array) => {
  const earliest = array.slice(1).reduce((movieObj, row) => {
    const [title, , year] = row.split(',');
    movieObj[title] = year;

    return movieObj;
  }, {});
  // console.log(earliest);
  const sorted = Object.entries(earliest)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 1);
  return sorted.toString();
};
console.log(earliestYear(topMovies));
