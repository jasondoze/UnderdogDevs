import { parse } from 'csv-parse/sync';
import fs from 'fs';
const movies = fs.readFileSync('billboard100_2000.csv').toString();

function parseMovies(array) {
  return parse(array, {
    columns: true,
    skip_empty_lines: true,
  });
}
/*
What song was the #1 song for the most weeks of 2000, 
who was the artist, and how many weeks was it at #1??
*/
function longestRunning1(data) {
  let peakArr = [];
  for (const rows of data) {
    let artist = rows.artist;
    let songTitle = rows.song;
    let peakRank = rows['peak-rank'];
    let previousWeek = rows['last-week'];
    // if the previous week is 1 and the peak rank is one
    if (peakRank == 1 && previousWeek == 1) {
      // push all the instaces of the song being number one with
      // the other variables included
      peakArr.push([songTitle, artist]);
    }
  }
  // count the times a song was number one using reduce
  let countArr = [];
  let countSongs = peakArr.reduce((songName, performer) => {
    // if songName[performer] === undefined  || songName[performer] === null
    songName[performer] ??= 0;
    songName[performer]++;
    return songName;
  }, {});
  // push the counted songs into an array
  countArr.push(countSongs);
  // console.log(countArr);
  // get all the counted week numbers in the objects
  let topWeeks = Object.values(countSongs);
  // console.log(topWeeks);
  // find the largest number in the array
  let maxWeeks = Math.max(...topWeeks);
  // console.log(maxWeeks);
  for (const obj of countArr) {
    // console.log(obj);
    for (const strings in obj) {
      // console.log(strings);
      // console.log (obj[strings])
      if (obj[strings] === maxWeeks) {
        console.log(`Title: ${strings}; Weeks at the top: ${obj[strings]}`);
      }
    }
  }
}

console.log(longestRunning1(parseMovies(movies)));
