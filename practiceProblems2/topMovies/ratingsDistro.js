import fs from 'fs';
const topMovies = fs
  .readFileSync('../top_movies.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating

const ratingsDistro = (array) => {
  const distributionRatings = array.slice(1).reduce((ratingsObj, row) => {
    let [, , , , , , ratings] = row.split(',');
    ratingsObj[ratings] ??= 0;
    ratingsObj[ratings]++;
    return ratingsObj;
  }, {});
  return Object.entries(distributionRatings)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
};
console.log(ratingsDistro(topMovies));

// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating

// What is the distribution of ratings? (How many are PG, PG-13, R, etc.?)

// const ratingsDistro = (array) => {
//   const distributionRatings = array.slice(1).reduce((ratingsObj, row) => {
//     let [, , , , , , , ratings] = row.split(',');
//     ratingsObj[ratings] ??= 0;
//     ratingsObj[ratings]++;
//     return ratingsObj;
//   }, {});
//   return distributionRatings;
// };
// console.log(ratingsDistro(topMovies));
