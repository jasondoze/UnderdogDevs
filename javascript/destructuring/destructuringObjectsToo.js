const artist = {
  name: 'Eurythmics',
  songs: ['Sweet Dreams', 'Here Comes the Rain Again'],
};
// console.log(artist);
// const { name, songs } = artist;
// console.log(artist);

const {
  name,
  songs: [first, second],
} = artist;
// console.log(artist.songs);
// console.log(artist.songs[1]);

const tracks = [
  { names: 'Sweet Dreams', artist: 'Eurythmics' },
  { names: 'Faith', artist: 'George Michael' },
  { names: 'Manic Monday', artist: 'The Bangles' },
];

const [{ names: name1, artists: artist1 }, { name: name2, artists: artist2 }] =
  tracks;

console.log(tracks);
