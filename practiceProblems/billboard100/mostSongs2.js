// import { parse } from 'csv-parse/sync';
// import fs from 'fs';
// const movies = fs.readFileSync('billboard100_2000.csv').toString();

// function parseMovies(array) {
//   return parse(array, {
//     columns: true,
//     skip_empty_lines: true,
//   });
// }
const artist = [
  { artist: 'Eminem', song: 'Mockingbird' },
  { artist: 'Eminem', song: "When I'm gone" },
  { artist: 'Eminem', song: '8 mile' },
  { artist: 'Eminem', song: 'Lose Yourself' },
  { artist: 'Nas', song: 'One mic' },
  { artist: 'Nas', song: 'Rewind' },
  { artist: 'Nas', song: 'The world is yours' },
];

function allArtists(data) {
  let allCharted = [];
  for (const rows of data) {
    let artist = rows.artist;
    let song = rows.song;
    allCharted.push({ artist, song });
  }
  return allCharted;
}

// create a function that takes in the allCharted array and creates a new set
// for each artist that has the artist name as the key and the song as the value
function mostCharted(allCharted) {
  // let allCharted = allArtists(data);
  let byArtist = {};
  // iterate over the allCharted array
  for (const rows of allCharted) {
    // if byArtist[rows.artist] is undefined or null
    byArtist[rows.artist] ??= new Set();
    // for each artist, add a key with artist name and a value of a new set to byArtist
    byArtist[rows.artist].add(rows.song);

    // if byArtist[rows.artist] is undefined or null
    // if (byArtist[rows.artist] === undefined || byArtist[rows.artist] === null) {
    //   // add a key with artist name and a value of a new set
    //   byArtist[rows.artist] = new Set();
    //   // add the song to the set
    //   byArtist[rows.artist].add(rows.song);
    //   // else if byArtist[rows.artist] is not undefined or null
    // } else {
    //   // add the new song to the set
    //   byArtist[rows.artist].add(rows.song);
    // }
    // console.log(byArtist[rows.artist].keys());
    // console.log(byArtist[rows.artist].values());
    // console.log(byArtist[rows.artist].size);
  }
  return byArtist;
}

// create a function that finds the largest set
let smallestSet = 0;
let mostSongArtist = [];
function mostSets(byArist) {
  for (const sets in byArist) {
    // .size finds the length of our set
    let set = byArist[sets].size;
    console.log(set);
  }
}

console.log(mostSets(mostCharted(allArtists(artist))));
