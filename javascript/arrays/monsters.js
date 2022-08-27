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
var animals_by_leg_count = {
  2: ['Eagle', 'Kangaroo', 'Ostrich'],
  4: ['Alligator', 'Cheetah', 'Hedgehog', 'Zebra'],
  8: ['Octopus', 'Scorpion'],
};
function create_all_monsters(num_legs) {
  let hybrids = [];
  let monsters = animals_by_leg_count[num_legs];
  for (let monster1 of monsters) {
    for (let monster2 of monsters) {
      if (monster1 !== monster2) {
        hybrids.push(monster1 + monster2);
      }
    }
  }
  return hybrids;
}
console.log(create_all_monsters(2));
