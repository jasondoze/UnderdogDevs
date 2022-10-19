/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. 
That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

// years past the first 2 years in if statements
const excessYears = humanYears - 2
const catPlus = animals2year * 4;
const dogPlus = animals2year * 5;

*/

var humanYearsCatYearsDogYears = function (humanYears) {
  const excessYears = humanYears - 2;
  const extraCatYears = excessYears * 4;
  const extraDogYears = excessYears * 5;
  if (humanYears === 1) {
    return [humanYears, 15, 15];
  } else if (humanYears === 2) {
    return [humanYears, 24, 24];
  } else {
    // if we have reached this point, we know we have at least 24 months
    return [humanYears, extraCatYears + 24, extraDogYears + 24];
  }
};

console.log(humanYearsCatYearsDogYears(1), '[1,15,15]');
console.log(humanYearsCatYearsDogYears(2), '[2,24,24]');
console.log(humanYearsCatYearsDogYears(10), '[10,56,64]');
