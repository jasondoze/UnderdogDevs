import fs from 'fs';
const nbaFinalsArray = fs
  .readFileSync('../nba_finals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');
// console.log(nbaFinalsArray);

// Print out a ranking of who has won the MVP more than once, by times won, e.g. this output:
//     - 6 times: Michael Jordan
//     - 3 times: Shaquille O'Neal, LeBron James
//     - 2 times: <etc></etc>
// Year,Winner,Loser,Score,MVP
const mostMVP = (array) => {
  const winners = array.slice(1).reduce((winStats, row) => {
    const [, , , , mvp] = row.split(',');
    if (mvp) {
      if (!winStats[mvp]) {
        winStats[mvp] = (winStats[mvp] || 0) + 1;
      }
    }
    return winStats;
  }, {});
};
console.log(mostMVP(nbaFinalsArray));

// Define a function called `getResults` that takes in an array called `array`
const getResults = (array) => {
  // Initialize an empty object called `mvps`
  const mvps = {};
  // Loop through each element in `array` (starting at the second element, as the first element is a header row)
  for (const row of array.slice(1)) {
    // Split the string at each comma, and assign the 5th element to a variable called `mvp`
    const [, , , , mvp] = row.split(',');
    // If `mvp` is truthy (not null or undefined)
    if (mvp) {
      // If `mvps` does not have a property with the name of `mvp`, add it and set the value to 0
      if (!mvps[mvp]) {
        mvps[mvp] = 0;
      }
      // Increment the value of the `mvp` property by 1
      mvps[mvp]++;
    }
  }
  // console.log(mvps);
  // Create an array called `mvpRanking` by getting an array of objects containing the properties and values of `mvps` (using `Object.entries`)
  const mvpRanking = Object.entries(mvps)
    // Sort the array in descending order based on the value of each object
    .sort((a, b) => b[1] - a[1])
    // Filter the array to only include objects where the value is greater than 1 (using the `filter` method)
    .filter(([, times]) => times > 1)
    //  Mapping the array to a new array of strings in the format `${times} times: ${mvp}` (using the `map` method)
    .map(([mvp, times]) => `${times} times: ${mvp}`);

  // Return an object with a property `mvpRanking` set to the value of the `mvpRanking` array
  // return { mvpRanking };
  console.log(mvpRanking);
};

// Log the result of calling the `getResults` function and passing in the `nbaFinalsArray`
getResults(nbaFinalsArray);
