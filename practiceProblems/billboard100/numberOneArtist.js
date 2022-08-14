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
    Print out all of the #1 songs and the artists who made them. 
    If a song was #1 for more than one week, only print it once. 
    Example output:
    These were the number one songs of 2000:
    "Try Again" - Aaliyah
    "Say My Name" - Destiny's Child
    "What A Girl Wants" - Christina Aguilera
    "Maria Maria" - Santana Featuring The Product G&B
    "Smooth" - Santana Featuring Rob Thomas
    "Independent Women Part I" - Destiny's Child 
*/

function numberOneArtist(data) {
  let numOneArr = [];
  for (const rows of data) {
    let artist = rows.artist;
    let numberOneSong = rows['peak-rank'];
    let song = rows.song;
    // console.log(artist, numberOneSong, song);
    // if the peak rank is one, push the artist and song into an array
    if (numberOneSong == '1') {
      numOneArr.push({ song, artist });
    }
    
    for (let i = 0; i < numOneArr.length; i++) {
      for (let j = i + 1; j < numOneArr.length; j++) {
        // if the song is the same in the array, remove it from the array
        if (numOneArr[i].song === numOneArr[j].song) {
          numOneArr.splice(j, 1);
        }
      }
    }
  }
  return numOneArr;
}

// console.log(numberOneArtist(parseMovies(movies)));

// create a helper function to print out the number one songs and the artists
// "These were the number one songs of 2000:
// "Try Again" - Aaliyah

function printNumberOneSongs(numOneArr) {
  console.log('These were the number one songs of 2000:');
  for (const row of numOneArr) {
    console.log(`${row.song} - ${row.artist}`);
  }
}
console.log(printNumberOneSongs(numberOneArtist(parseMovies(movies))));
