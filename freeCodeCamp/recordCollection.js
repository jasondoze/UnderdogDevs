// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};
// Problem Explanation
// For the given id parameter, which is associated with the records object:
// * If the value parameter isn’t an empty string, update (or set) the value parameter for the prop parameter.

// * If the prop parameter is equal to "tracks" and the value isn’t an empty string, push the value onto the end of the tracks array.

// * If value is an empty string, delete that prop from the object.
// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value;
  } else if (
    prop === 'tracks' &&
    records[id].hasOwnProperty('tracks') === false
  ) {
    records[id][prop] = [value];
  } else if (prop === 'tracks' && value !== '') {
    records[id][prop].push(value);
  } else if (value === '') {
    delete records[id][prop];
  }
  return records;
}
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


