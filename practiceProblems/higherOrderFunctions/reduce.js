/*
The reduce() method executes a user-supplied "reducer" callback function on each 
element of the array, in order, passing in the return value from the calculation 
on the preceding element. The final result of running the reducer across all elements 
of the array is a single value.

The first time that the callback is run there is no "return value of the previous 
calculation". If supplied, an initial value may be used in its place. Otherwise the
array element at index 0 is used as the initial value and iteration starts from the
next element (index 1 instead of index 0).
*/

const stats = [
  { year: 2019, team: 'Toronto Raptors', score: '4-2', mvp: 'Kawhi Leonard' },
  {
    year: 2017,
    team: 'Golden State Warriors',
    score: '4-1',
    mvp: 'Kevin Durant',
  },
  {
    year: 2016,
    team: 'San Antonio Spurs',
    score: '4-2',
    mvp: 'Andre Iguodala',
  },
  { year: 2015, team: 'Miami Heat', score: '4-3', mvp: 'Kawhi Leonard' },
  {
    year: 2014,
    team: 'Oklahoma City Thunder',
    score: '4-2',
    mvp: 'LeBron James',
  },
  { year: 2013, team: 'Boston Celtics', score: '4-2', mvp: 'Dirk Nowitzki' },
  {
    year: 2012,
    team: 'Los Angeles Lakers',
    score: '4-2',
    mvp: 'Michael Jordan',
  },
  { year: 2011, team: 'Cleveland Cavaliers', score: '4-2', mvp: 'Shaq' },
  { year: 2009, team: 'Toronto Raptors', score: '4-2', mvp: 'Kobe Bryant' },
  { year: 2008, team: 'Miami Heat', score: '4-2', mvp: 'Beelzebub' },
];

const ages = [33, 44, 32, 56, 23, 32, 38, 43, 23, 45, 56, 33, 41, 52];

// for loop
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);
// 551

// Reduce- takes values to one single value

// const whatever = ages.reduce((accumulator, age, index, array) => total + age, 0);
const ageSum2 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum2);
// 551

// Get total years for all team winners
const totalYears = stats.reduce((total, years) => total + years.year, 0);
console.log(totalYears);
// 20134

const people = [
  { name: 'Kyle', age: 26 },
  { name: 'John', age: 31 },
  { name: 'Sally', age: 42 },
  { name: 'Jill', age: 42 },
];

const result = people.reduce((groupedPeople, person) => {
  console.log(groupedPeople)
  console.log(person);
  const age = person.age;
  if (groupedPeople[age] == null) groupedPeople[age] = [];
  groupedPeople[age].push(person);
  return groupedPeople;
}, {});

console.log(result);
