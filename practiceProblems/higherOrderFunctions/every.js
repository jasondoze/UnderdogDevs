/* 
The every() method tests whether all elements in the array 
pass the test implemented by the provided function. It returns a Boolean value.
*/

const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

const allBlues = characters.every(
  (character) => character.eye_color === 'blue'
);
console.log(allBlues);

const massForty = characters.every((character) => character.mass > 40);
console.log(massForty);

const shorterThanForty = characters.every(
  (character) => character.height < 200
);
console.log(shorterThanForty);

const allMale = characters.every((character) => character.gender !== 'male');
console.log(allMale);
