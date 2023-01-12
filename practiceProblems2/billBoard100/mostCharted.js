import { parse } from 'csv-parse/sync';
import fs from 'fs';

const parseSongs = (inputSongs) => {
  const songsData = fs.readFileSync('../billboard100_2000.csv').toString().toUpperCase();

  return parse(songsData, {
    columns: true,
    skip_empty_lines: true,
  });
};
// song,artist,last-week,peak-rank,weeks-on-board,date

// What artist had the most songs chart in 2000, and what were those songs?

const mostSongs = (array) => {
  let countedSongs = new Set(); // set to create an empty set called countedSongs
  let maxObj = array.reduce((maxObj, { SONG, ARTIST }) => {
    if (!countedSongs.has(SONG)) {
      //checking if the song is already counted
      countedSongs.add(SONG); // adding the song to the set
      if (maxObj[ARTIST]) {
        // checking if artist already exists in maxObj
        maxObj[ARTIST].count++;
        maxObj[ARTIST].songs.push(SONG);
      } else {
        //if artist not exists in maxObj
        maxObj[ARTIST] = { count: 1, songs: [SONG] };
      }
    }
    return maxObj;
  }, {});
  // Convert the resulting object into an array of key-value pairs
  let artistArray = Object.entries(maxObj);
  // Initialize the max variable
  let highestCount = artistArray.reduce(
    (max, current) => {
      // Compare the count property of the current artist object with the count property of the max accumulator
      // If the current artist object's count property is greater than the max accumulator's count property
      // return the current artist object as max
      return current[1].count > max.count ? current[1] : max;
    },
    { count: 0 } // Initial value of the accumulator is set to an object with a count property of 0
  );
  // Find the artist name of the artist object with the highest count
  let artist = artistArray.find((artist) => artist[1] == highestCount)[0];
  // return the artist and songs information
  return { artist: artist, count: highestCount.count, songs: highestCount.songs };
};
console.log(mostSongs(parseSongs()));
