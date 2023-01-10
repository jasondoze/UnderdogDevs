import { SlowBuffer } from 'buffer';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
const artists = fs.readFileSync('billboard100_2000.csv').toString();

function parseMovies(array) {
  return parse(array, {
    columns: true,
    skip_empty_lines: true,
  });
}

// nested_thing = { a: { b: 'c' } };
// other_thing = { a: ['b', { c: 'd' }] };

// // START

// const TEST_DATA = [{ artist: 'Taylor Swift', song: 'Bad Blood' }];

// const artist = [
//   { artist: 'Eminem', song: 'Mockingbird' },
//   { artist: 'Eminem', song: "When I'm gone" },
//   { artist: 'Eminem', song: '8 mile' },
//   { artist: 'Eminem', song: 'Lose Yourself' },
//   { artist: 'Nas', song: 'One mic' },
//   { artist: 'Nas', song: 'Rewind' },
//   { artist: 'Nas', song: 'The world is yours' },
// ];

// takes in the same input as mostCharted, returns a set of artists {'Taylor Swift', 'Jagged Edge'}
// function allArtists(data) {
//   // homework

// }

function mostCharted2(data) {
  // set of artists
  // let artists = allArtists(data);

  // Jason to do
  let byArtist = {};
  // for each artist, add a key with artist name and a value of a new set to byArist

  for (const row of data) {
    if (!byArtist[row.artist]) {
      // why is this always false?
      // continue;
      byArtist[row.artist] = new Set();
      byArtist[row.artist].add(row.song);
    } else {
      byArtist[row.artist].add(row.song);
      // add a key with artist name and a value of a new set
      // we have a set for each artist name
      // walk over every song, use byArtist to find duplicates
      // byArtist[artist] = new Set();
    }
  }
  return byArtist;
}


console.log(mostCharted2(parseMovies(artists)));
//END

// What artist had the most songs chart in 2000,
// and what were those songs?
// sets dont allow duplicates
// which artist has the longest array of songs
// has set .has
// artist: [array of songs]
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// find all instances of an artist with any songfunction mostCharted(data) {
//   const allCharted = [];
//   for (let rows of data) {
//     let song = rows.song;
//     let artist = rows.artist;
//     allCharted.push({ song, artist });
//   }

//   // remove all duplicate instances of songs
//   for (let row of allCharted) {
//     for (let row2 of allCharted) {
//       let track = row.song;
//       let track2 = row2.song;
//       // if the song is the same remove the row of data
//       if (track === track2) {
//         allCharted.splice(row2, 1);
//       }
//     }
//   }
//   return allCharted;
//   // let countArtists = [];
//   // let count = 0;
//   // for (let i = 0; i < allCharted.length; i++) {
//   //   let artist = allCharted[i].artist;
//   //   console.log(artist);
//   // }
// }
// console.log(mostCharted(parseMovies(movies)));
