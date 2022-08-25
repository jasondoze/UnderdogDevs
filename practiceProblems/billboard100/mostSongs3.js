// what artist has the most songs charted and what are the names of the songs?

const artistsAndSongs = [
  { artist: 'Eminem', song: 'Mockingbird' },
  { artist: 'Eminem', song: "When I'm gone" },
  { artist: 'Eminem', song: '8 mile' },
  { artist: 'Eminem', song: 'Lose Yourself' },
  { artist: 'Nas', song: 'One mic' },
  { artist: 'Nas', song: 'Rewind' },
  { artist: 'Nas', song: 'The world is yours' },
];

// create a function that will add each artist into a set and
// for each artist add any additional songs
function createArtistSongSets(artistsAndSongsData) {
  let songsByArtist = {};
  for (const row of artistsAndSongsData) {
    if (!songsByArtist[row.artist]) {
      songsByArtist[row.artist] = new Set();
      songsByArtist[row.artist].add(row.song);
    } else {
      songsByArtist[row.artist].add(row.song);
    }
  }
  return songsByArtist;
}

// create a function that finds the artist with the most songs charted,
// returns the artist and the song names
function findArtistWithMostSongs(artistSongSets) {
  let largestSetSize = 0;
  let currentLargestArtistAndSongs = null;
  for (const artist in artistSongSets) {
    let topArtist = artist;
    let songs = artistSongSets[artist];

    let size = artistSongSets[artist].size;
    if (size > largestSetSize) {
      largestSetSize = size;
      currentLargestArtistAndSongs = { topArtist, songs };
    }
  }
  return currentLargestArtistAndSongs;
}

let allSets = createArtistSongSets(artistsAndSongs);
let mostSongs = findArtistWithMostSongs(allSets);
console.log(mostSongs);
