import { parse } from 'csv-parse/sync';
import fs from 'fs';

const parseSongs = (inputSongs) => {
  const songsData = fs.readFileSync('../billboard100_2000.csv').toString().toUpperCase();

  return parse(songsData, {
    columns: true,
    skip_empty_lines: true,
  });
};
// rank,song,artist,last-week,peak-rank,weeks-on-board,date

// What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?

const mostWeeks = (array) => {
  const songObj = array.reduce((chartTop, { SONG }) => {
    chartTop[SONG] ??= 0;
    chartTop[SONG]++;
    return chartTop;
  }, {});
  return Object.entries(songObj).sort((a, b) => b[1] - a[1])[0];
};
console.log(mostWeeks(parseSongs()));
