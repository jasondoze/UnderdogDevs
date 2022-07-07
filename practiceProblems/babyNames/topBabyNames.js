const fs = require("fs");
const babyNamesCurrent = fs.readFileSync("baby_names_2020_short.txt");
const babyNamesOld = fs.readFileSync("baby_names_1880_short.txt");
const babyNames2020 = babyNamesCurrent.toString().toLowerCase().split("\n");
const babyNames1880 = babyNamesOld.toString().toLowerCase().split("\n");

// What are all of the names that were top 40 baby names in both 1880 and 2020?


// create a topNames arr variable
// iterate over new names list
// iterate over old names list
// if new names are also in old names
// push the names into an array
// return the topNames array

function topBabyNames(newNames, oldNames) {
  let topNames = [];
  for (let i = 0; i < newNames.length; i++) {
    for (let j = 0; j < oldNames.length; j++) {
      if (newNames[i].includes(oldNames[j]) && oldNames[j].includes(newNames[i])) {
        topNames.push(newNames[i]);
      }
    }
  }
    return topNames;
}

console.log(topBabyNames(babyNames2020, babyNames1880), 'using 2 for loops');


//create the same function using .filter in a function
function topBabyNamesFilter(newNames, oldNames) {
  return newNames.filter((name) => oldNames.includes(name));
}
console.log(topBabyNamesFilter(babyNames2020, babyNames1880), 'using .filter');

