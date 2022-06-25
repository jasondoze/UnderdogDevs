const fs = require("fs");
const babyNamesCurrent = fs.readFileSync("baby_names_2020_short.txt");
const babyNamesOld = fs.readFileSync("baby_names_1880_short.txt");
const babyNames1 = babyNamesCurrent.toString().toLowerCase().split("\n");
const babyNames2 = babyNamesOld.toString().toLowerCase().split("\n");

// What are all of the names that were top 40 baby names in both 1880 and 2020?
console.log(babyNames1.filter((name) => babyNames2.includes(name)));
