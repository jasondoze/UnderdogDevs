const fs = require("fs");
const text = fs.readFileSync("countries.txt");
const countries = text.toString().toLowerCase().split("\n");

const countryWithinCountry = [];
const countryName = [];

// check if a country name contains another country name

countries.forEach((country) => {
  countries.forEach((country2) => {
    if (country.includes(country2) && country !== country2) {
      countryWithinCountry.push(country);
      countryName.push(country2);
    }
  });
});
console.log(countryWithinCountry, countryName);
