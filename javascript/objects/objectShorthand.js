// An easier way to make objects
// In ES6, we now have new features to make declaring objects easier.
// Whereas the naming of variables did not matter before, it can now
// define our keys for us. For example, before we would have done this:

var names = 'Loser';
var artist1 = 'Beck';
var song1 = { name: names, artist: artist1 };
console.log('song1', song1);
// Now, we can do this:

const name = 'Loser';
const artist2 = 'Beck';
const song2 = { name, artist2 };

console.log('song2', song2);
// Both song objects will end up with two keys: name and artist and both
// will point towards the appropriate values.

// We can also compute property names with a special syntax. Before,
//  we would have had to have written something like the following:
var artist3 = 'Beck';
var songs = ['Loser', 'Up All Night', 'Dear Life'];
var result = {};
result[artist3] = songs;

console.log('result', result);

// We can now simplify that slightly:
const artist4 = 'Beck';
const songs2 = ['Loser', 'Up All Night', 'Dear Life'];
const result1 = { [artist4]: songs2 };

console.log('result1', result1);
// In both cases, we will end up with an object that looks like:
// { Beck: [ 'Loser', 'Up All Night', 'Dear Life' ] }

const musician = 'SoundGarden';
const tracks = ['Black Hole Sun', 'The Day I Tried To Live', 'Kickstand'];
const bandObj = { [musician]: tracks };
console.log(bandObj);

let band = '';
let titles = [];
band += 'Pantera';
let titleArr = [
  'The Great Southern Trendkill',
  'Cowboys From Hell',
  'Far Beyond Driven',
];
titles = titleArr;
let bandInfo = { [band]: titleArr };
console.log(bandInfo);
let secondBand = 'Kyuss';
let titleArr2 = ['Blues For The Red Sun', 'Demon Cleaner', 'Space Cadet'];
bandInfo[secondBand] = [];
console.log(bandInfo);
bandInfo[secondBand] = titleArr2;
console.log(bandInfo);
bandInfo = { [secondBand]: titleArr2 };
console.log(bandInfo);
