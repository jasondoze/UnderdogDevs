const babyNames2020 = require('fs')
  .readFileSync('../baby_names_2020_short.txt')
  .toString()
  .toLowerCase()
  .split('\n');

const babyNames1880 = require('fs')
  .readFileSync('../baby_names_1880_short.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// What are all of the names that were top 40 baby names in both 1880 and 2020?

const allNames = (oldNames, newNames) => {
  return oldNames.filter((names) => newNames.includes(names));
};
console.log(allNames(babyNames1880, babyNames2020));
console.log(performance.now());
// 70.29281795024872

const allBabyNames = (oldNames, newNames) => {
  let newBabies = new Set(newNames);
  for (const names of oldNames) {
    if (newBabies.has(names)) {
      console.log(names);
    }
  }
};
allBabyNames(babyNames1880, babyNames2020);
console.log(performance.now());
// 71.48907697200775
