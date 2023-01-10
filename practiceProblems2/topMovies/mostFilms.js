import fs from 'fs';
const topMovies = fs
  .readFileSync('../top_movies.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');

// What distributor has the most films on this list?
// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating

const mostFilms = (array) => {
  // We create a new object to store the counts of films for each distributor.
  // The reduce function iterates through the elements in the array (excluding the first element, which is the column names).
  let distributorCounts = array.slice(1).reduce((counts, row) => {
    // For each row, we split the string by the comma to get the title and distributor, and store the latter in a variable.
    const [_, distributor] = row.split(',');
    // if obj[dist] !== null || undefined, we increment the count for the distributor in the counts object by 1.
    counts[distributor] ??= 0;
    counts[distributor]++;
    return counts;
  }, {});

  // Finally, we use the reduce function again to find the distributor with the highest count.
  return Object.keys(distributorCounts).reduce((a, b) =>
    distributorCounts[a] > distributorCounts[b] ? a : b
  );
};

// We test the function with an example array of movies.
console.log(mostFilms(topMovies)); // WARNER BROS.
