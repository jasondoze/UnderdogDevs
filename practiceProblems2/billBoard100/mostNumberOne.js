import { parse } from 'csv-parse/sync';
import fs from 'fs';

const parseSongs = (inputSongs) => {
  const songsData = fs
    .readFileSync('../billboard100_2000.csv')
    .toString()
    .toLowerCase();

  return parse(songsData, {
    columns: true,
    skip_empty_lines: true,
  });
};

// What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?