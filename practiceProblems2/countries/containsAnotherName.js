
const allCountries = require('fs')
  .readFileSync('../countries.txt')
  .toString()
  .toLowerCase()
  .split('\n');

// There is at least one country name that contains another country name. Find all of these cases.
const containsCountry = (countries) => {
  countries.forEach((country) => {
    countries.forEach((country2) => {
      if (country.includes(country2) && country !== country2) {
        console.log(country);
      }
    });
  });
};
containsCountry(allCountries);

const containsCountry2 = (countries) => {
  for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < countries.length; j++) {
      if (countries[i].includes(countries[j]) && countries[i] !== countries[j]) {
        console.log(countries[i]);
      }
    }
  }
};
containsCountry2(allCountries);