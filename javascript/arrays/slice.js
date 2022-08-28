var array = ['a', 'b', 'c', 'd', 'e'];

var sliceOfArray1 = array.slice(0, 2);
console.log(
  'slicing a portion of the array from before index 0, to before index 2:',
  sliceOfArray1
);
var array = ['a', 'b', 'c', 'd', 'e'];

var sliceOfArray2 = array.slice(2, 5); // OR array.slice(2); OR array.slice(2, array.length);
console.log(
  'slicing a portion of the array from before index to, to before index 5 OR from index 2 to rest of array:',
  sliceOfArray2
);

console.log('slicing the array does not affect the original array:', array);
var array = ['a', 'b', 'c', 'd', 'e'];

var copyOfArray = array.slice();
console.log('copy of array:', copyOfArray);
// We can also do this with variables:

var altitudesAlongHikingTrail = [20, 70, 110, 170, 120, 40];
var todaysHike = altitudesAlongHikingTrail.slice(1, 4);

console.log("altitudes for today's hike:", todaysHike);

console.log(
  'original altitudes along trail is not affected by slice:',
  altitudesAlongHikingTrail
);
var originalListOfVegatables = [
  'squash',
  'bell pepper',
  'artichoke',
  'cucumber',
];
var copyOfListOfVegatables = originalListOfVegatables.slice();

console.log('copy of list of vegatables:', copyOfListOfVegatables);
