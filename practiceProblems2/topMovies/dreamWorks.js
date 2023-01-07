import fs from 'fs';
const topMovies = fs
  .readFileSync('../top_movies.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');

// What movies on this list were distributed by DreamWorks?

const dreamWorks = (array) => {
  const dreamWorksMovies = {};
  for (let i = 0; i < array.length; i++) {
    let columns = array[i].split(',');
    let distributor = columns[1];
    let title = columns[0];
    if (distributor === 'DREAMWORKS' || distributor === 'DREAMWORKS DISTRIBUTION' && !dreamWorksMovies[distributor]) {
      dreamWorksMovies[title] = distributor;
    }
  }
  return Object.keys(dreamWorksMovies);
};
console.log(dreamWorks(topMovies));


const dreamWorks2 = (array) => {
  // Filter the array of movies based on the condition that the movie must have either "DREAMWORKS" or "DREAMWORKS DISTRIBUTION" as its distributor
  return array
    .filter(row => row.split(',')[1] === 'DREAMWORKS' || row.split(',')[1] === 'DREAMWORKS DISTRIBUTION')
    // Extract the movie titles from the remaining rows in the array
    .map(row => row.split(',')[0]);
};

// Log the array of movie titles returned by the dreamWorks function
console.log(dreamWorks2(topMovies));