/*
The some() method tests whether at least one element in the array 
passes the test implemented by the provided function. It returns true if, 
in the array, it finds an element for which the provided function returns true; 
otherwise it returns false. It doesn't modify the array.
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

const oneMaleCharacter = characters.some((character) => {
  return character.gender === 'male';
});
console.log(oneMaleCharacter);

// or

const oneMaleCharacter2 = characters.some(
  (character) => character.gender === 'male'
);
console.log(oneMaleCharacter2);

const onlyBlueEyes = characters.some(
  (character) => character.eye_color === 'blue'
);
console.log(onlyBlueEyes);

const oneTallCharacter = characters.some(
  (character) => character.height > 202
);
console.log(oneTallCharacter);

const massCharacter = characters.some((character) => character.mass < 40);
console.log(massCharacter);
