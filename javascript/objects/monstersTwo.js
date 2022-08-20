/*
 * A monster has 2 parts: a head and body. The head and the body
 * must be from different animals with the same number of legs.

 * Write a function that takes as input a number of legs and
 * returns an array of all monsters that can be made from animals
 * with that number of legs. A monster with animal A head and
 * animal B body is distinct from a monster with animal B head and
 * animal A body.

 * Example:

 * create_all_monsters(2) -> 
 ['EagleKangaroo',
  'EagleOstrich',
  'KangarooEagle',
  'KangarooOstrich',
  'OstrichEagle',
  'OstrichKangaroo']
 
 */
const animals_by_leg_count = {
  2: ['Eagle', 'Kangaroo', 'Ostrich'],
  4: ['Alligator', 'Cheetah', 'Hedgehog', 'Zebra'],
  8: ['Octopus', 'Scorpion'],
};

// function create_all_monsters(num_legs) {
//   let animals = [];
//   let allMonsters = animals_by_leg_count[num_legs];
//   for (let i = 0; i < allMonsters.length; i++) {
//     for (let j = 0; j < allMonsters.length; j++) {
//       if (allMonsters[i] !== allMonsters[j]) {
//         animals.push(allMonsters[i] + allMonsters[j]);
//       }
//     }
//   }
//   return animals;
// }
// console.log(create_all_monsters(8));

function allMonsters(numLegs) {
  let hybrid = [];
  let allMonsters = animals_by_leg_count[numLegs];
  for (let i of allMonsters) {
    for (let j of allMonsters) {
      if (i !== j) {
        hybrid.push(i + j);
      }
    }
  }
  return hybrid;
}

console.log(allMonsters(4));
