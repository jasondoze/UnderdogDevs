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
/*
Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. 
Example output:
These were the number one songs of 2000:
"Try Again" - Aaliyah
"Say My Name" - Destiny's Child
"What A Girl Wants" - Christina Aguilera
"Maria Maria" - Santana Featuring The Product G&B
"Smooth" - Santana Featuring Rob Thomas
"Independent Women Part I" - Destiny's Child
*/

const numberOnez = (array) => {
  // Create a new set from the array and spread it into an array
  return [
    ...new Set(
      array
        // Filter the array to only include songs with the 'peak-rank' property set to "1"
        .filter((song) => song['peak-rank'] === '1')
        // Map the filtered array to a new array of strings in the format: "song name - artist"
        .map((song) => `"${song.song}" - ${song.artist}`)
    ),
  ];
};

// Log the result of calling the numberOnez function on the parsedSongs array,
// with the resulting array of strings joined together with newline characters
console.log(numberOnez(parseSongs()).join('\n'));

const numberOne = (array) => {
  return array
    .filter((song) => song['peak-rank'] === '1')
    .reduce((artistObj, song) => {
      artistObj[song.song] = song.artist;
      return artistObj;
    }, {});
};
console.log(numberOne(parseSongs()));

const numberUno = (array) => {
  let artistObj = {};
  for (const { song, artist, 'peak-rank': peakRank } of array) {
    if (peakRank == '1') {
      artistObj[song] = artist;
    }
  }

  return artistObj;
};
console.log(numberUno(parseSongs()));


