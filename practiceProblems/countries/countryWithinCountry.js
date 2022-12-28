const assert = require("assert");

const fs = require("fs");
const text = fs.readFileSync("countries.txt");
const allCountries = text.toString().toLowerCase().split("\n");

// check if a country name contains another country name

function countryWithinCountry(countries) {
  let countryInsideCountry = [];

  countries.forEach((country) => {
    countries.forEach((country2) => {
      if (country.includes(country2) && country !== country2) {
        countryInsideCountry.push(country);
      }
    });
  });
  return countryInsideCountry;
}
 console.log(countryWithinCountry(allCountries));

function testCountries() {
  assert.deepEqual([], []);
  assert.deepEqual(countryWithinCountry([]), []);

  assert.deepEqual(countryWithinCountry(["congo", "korea", "guinea"]), []);
  assert.deepEqual(countryWithinCountry(["congo", "korea", "democratic republic of korea"]), ['democratic republic of korea']);
  assert.deepEqual(countryWithinCountry(["democratic republic of korea", "congo", "korea"]), ['democratic republic of korea']);


// create some tests for functions on other problems
  
  
  // BELOW IS STUFF THAT WE WORKED ON ON THE WAY
  // assert.deepEqual(countryWithinCountry(["congo", "korea", "guinea"]), [
  //   "republic of congo",
  //   "democratic republic of korea",
  //   "guinea bissau",
  // ]);

  //UPDATE test_countries so that things pass
  // test_countries = ["congo", "korea", "democratic republic of korea"];
  // test_result = countryWithinCountry(test_countries);
  // assert.equal(test_result.length, 1);
  // // assert.deepEqual(countryWithinCountry(["congo", "korea", "guinea"]), []);
  console.log("all tests passed");
}
testCountries();

