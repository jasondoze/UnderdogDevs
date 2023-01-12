import { parse } from 'csv-parse/sync';
import fs from 'fs';

const parseSongs = (inputSongs) => {
  const songsData = fs.readFileSync('../billboard100_2000.csv').toString().toLowerCase();

  return parse(songsData, {
    columns: true,
    skip_empty_lines: true,
  });
};
// console.log(parseSongs());
// What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?
// rank,song,artist,last-week,peak-rank,weeks-on-board,date

const mostNumberOne2 = (array) => {
  const songs = array.reduce((songObj, { song, artist, 'last-week': lastWeek, 'peak-rank': peakRank }) => {
    if (peakRank == 1 && lastWeek == 1) {
      if (songObj[song]) {
        songObj[song].count++;
      } else {
        songObj[song] = { count: 1, artist: artist };
      }
    }
    return songObj;
  }, {});
  return Object.entries(songs).sort((a, b) => b[1].count - a[1].count)[0];
};
console.log(mostNumberOne2(parseSongs()));
/* [
  'maria maria',
  { count: 10, artist: 'santana featuring the product g&b' }
]
*/
