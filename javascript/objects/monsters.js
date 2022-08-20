const animals_by_leg_count = {
  2: ['Eagle', 'Kangaroo', 'Ostrich'],
  4: ['Alligator', 'Cheetah', 'Hedgehog', 'Zebra'],
  8: ['Octopus', 'Scorpion'],
};

function monsters(num_legs) {
  let hybrids = [];
  let legs = animals_by_leg_count[num_legs];
  for (const names in legs) {
    for (const secondName in legs) {
      if (legs[names] !== legs[secondName]) {
        hybrids.push(legs[names] + legs[secondName]);
      }
    }
  }
  return hybrids;
}
console.log(monsters(4));
