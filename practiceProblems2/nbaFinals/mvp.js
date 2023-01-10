import fs from 'fs';
const nbaFinalsArray = fs
  .readFileSync('../nba_finals.csv')
  .toString()
  .toUpperCase()
  .split('\r\n');

// Print out a ranking of who has won the MVP more than once, by times won, e.g. this output:
//     - 6 times: Michael Jordan
//     - 3 times: Shaquille O'Neal, LeBron James
//     - 2 times: <etc></etc>
// Year,Winner,Loser,Score,MVP

const getResultz = (array) => {
  // Initialize an empty object to store the MVP count
  let winners = {};

  // Use slice() to create a new array from the original array, starting from the second element
  // Use reduce() to iterate over the new array and create an object named mvpObj that counts how many times a given name appears in the array
  winners = array.slice(1).reduce((mvpObj, row) => {
    // Use destructuring assignment to extract the MVP name from the row string
    const [, , , , mvp] = row.split(',');
    // If there is an MVP name, add it to the `mvpObj` object
    if (mvp) {
      // Use the nullish coalescing operator (??) to set the MVP count to 0 if it is not already defined
      mvpObj[mvp] ??= 0;
      // Increment the MVP count
      mvpObj[mvp]++;
    }
    return mvpObj;
  }, {});
  console.log(winners);
  // Use Object.entries() to convert the `winners` object into an array of [name, count] pairs
  const mvpRanking = Object.entries(winners)
    // Use sort() to sort the array in descending order by count
    .sort((a, b) => b[1] - a[1])
    // Use filter() to remove any [name, count] pairs where count is less than 2\
    .filter(([_, times]) => times > 1)
    // Use map() to transform the remaining [name, count] pairs into strings of the form "count: name"
    .map(([mvp, times]) => `${times} times: ${mvp}`);

  // Return an object with a single property, `mvpRanking`, which is the array of strings we just created
  return { mvpRanking };
};

// Call the `getResultz` function with `nbaFinalsArray` as the argument and log the returned object to the console
console.log(getResultz(nbaFinalsArray));
/*
{
  mvpRanking: [
    '6: MICHAEL JORDAN',
    '3: LEBRON JAMES',
    '3: TIM DUNCAN',
    "3: SHAQUILLE O'NEAL",
    '3: MAGIC JOHNSON',
    '2: KAWHI LEONARD',
    '2: KEVIN DURANT',
    '2: KOBE BRYANT',
    '2: HAKEEM OLAJUWON',
    '2: LARRY BIRD',
    '2: WILLIS REED'
  ]
}
*/
