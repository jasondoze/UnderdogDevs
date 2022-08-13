const fs = require('fs');
const names = fs.readFileSync('baby_names_2020_short.txt');
const babyNames = names.toString().toLowerCase().split('\n');

function shortestName(babies) {
  let shortestName = '';
  let shortestNameLength = babies[0].length;
  for (let i in babies) {
    if (babies[i].length < shortestNameLength) {
      shortestName = babies[i];
      shortestNameLength = babies[i].length;
    }
  }
  return shortestName;
}

console.log(shortestName(babyNames));
