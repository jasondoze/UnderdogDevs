/*
 * A monster has 2 parts: a head and body. The head and the body
 * must be from different animals with the same number of legs.
 *
 * Write a function that takes as input a number of legs and
 * returns an array of all monsters that can be made from animals
 * with that number of legs. A monster with animal A head and
 * animal B body is distinct from a monster with animal B head and
 * animal A body.
 *
 * Example:
 *
 * create_all_monsters(2) -> ["EagleKangaroo", "EagleOstrich",
 *                            "KangarooEagle, "KangarooOstrich"]
 *
 */

// I object
// O array
// iterate through animals leg count
// create an empty array variable that has the values of key 2
//iterate through the values of 2 legs
// the first element needs to be added to the rest of the elements in the array
// eagle, kangarooeagle, ostricheagle-
// the second element must be added to the first and the third
// the third element must be added to the first and the second

// function create_all_monsters(num_legs) {
// const animals_by_leg_count = {
//   2: ['Eagle', 'Kangaroo', 'Ostrich'],
//   4: ['Alligator', 'Cheetah', 'Hedgehog', 'Zebra'],
//   8: ['Octopus', 'Scorpion'],
// };
//   console.log(create_all_monsters[num_legs[4]])
//   let combinations = [];
let animals = animals_by_leg_count[num_legs];
//   for (let i = 0; i < animals.length; i++) {
//     for (let j = 0; j < animals.length; j++) {
//       if (animals[i] !== animals[j]) {
        combinations.push(animals[i] + animals[j]);
//       }
//     }
//   }
//   return combinations;
// }
// console.log(create_all_monsters(2));

const animals_by_leg_count = {
  2: ['Eagle', 'Kangaroo', 'Ostrich'],
  4: ['Alligator', 'Cheetah', 'Hedgehog', 'Zebra'],
  8: ['Octopus', 'Scorpion'],
};

animals_by_leg_count['foo'];
animals_by_leg_count[5]



// notes on where I got stuck
/*
How does Jacob think about this line?

combinations is an object and its class has push method defined
push probably means its a data structure, likely an array or a stack (from familiarity w/ DS)
push looks like it takes a single object as an argument
push IS an array from line 35 ==> lets review docs
Google "arrray push javascript" => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

*/

combinations.push( 3 * 15 , 6 % 2);

x = animals[i] + animals[j]
combinations.push(x);