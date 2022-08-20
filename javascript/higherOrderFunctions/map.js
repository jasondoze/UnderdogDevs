// Array.prototype.map()
// The map() method creates a new array populated with the results of calling
// a provided function on every element in the calling array.

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

const allScores = stats.map((i) => i.score);
console.log(allScores);

// Map- create new arrays from the current array
const teamNames = stats.map((teams) => teams.team);
console.log(teamNames);
/*
[
  'Toronto Raptors',
  'Golden State Warriors',
  'San Antonio Spurs',
  'Miami Heat',
  'Oklahoma City Thunder',
  'Boston Celtics',
  'Los Angeles Lakers',
  'Cleveland Cavaliers',
  'Toronto Raptors',
  'Miami Heat'
]
*/

const teamScores = stats.map((scores) => scores.score);
console.log(teamScores);
/* 
[
  '4-2', '4-1', '4-2',
  '4-3', '4-2', '4-2',
  '4-2', '4-2', '4-2',
  '4-2'
]
*/

const agesSquare = ages.map((age) => Math.sqrt(age));
console.log(agesSquare);
/*
[
  5.744562646538029,
  6.6332495807108,
  5.656854249492381,
  7.483314773547883,
  4.795831523312719,
  5.656854249492381,
  6.164414002968976,
  6.557438524302,
  4.795831523312719,
  6.708203932499369,
  7.483314773547883,
  5.744562646538029,
  6.4031242374328485,
  7.211102550927978
] 
*/

const agesTimesTwo = ages.map((age) => age * 2);
console.log(agesTimesTwo);

/*
[
  5.744562646538029,
  6.6332495807108,
  5.656854249492381,
  7.483314773547883,
  4.795831523312719,
  5.656854249492381,
  6.164414002968976,
  6.557438524302,
  4.795831523312719,
  6.708203932499369,
  7.483314773547883,
  5.744562646538029,
  6.4031242374328485,
  7.211102550927978
]
*/

const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(ageMap);
/*
[
  11.489125293076057,
  13.2664991614216,
  11.313708498984761,
  14.966629547095765,
  9.591663046625438,
  11.313708498984761,
  12.328828005937952,
  13.114877048604,
  9.591663046625438,
  13.416407864998739,
  14.966629547095765,
  11.489125293076057,
  12.806248474865697,
  14.422205101855956
]
*/

//   Use the .map() method to take the bills array below and create a second array
//   of numbers called totals. The totals array should contains each amount from the
//   bills array but with a 15% tip added. Log the totals array to the console.
//
//   For example, the first two entries in the totals array would be:
//
//   [57.76, 21.99, ... ]
//
//   Things to note:
//    - each entry in the totals array must be a number
//    - each number must have an accuracy of two decimal points

//   QUIZ REQUIREMENTS
//   - Your code should have the variables `bills` and `totals`
//   - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
//   - Your `totals` array should be an array of numbers
//   - Your code should print the `totals` array to the console
//   - The output must be as described above.

const bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
  100.1, 6.77, 2.22,
];

const totals = bills.map((num) => {
  num = num * 0.15 + num;
  return Number(num.toFixed(2));
});
console.log(totals);
/*
[
   57.76,  21.99,  39.11,
  115.13,  13.97,  11.38,
   33.48,  14.94,   11.5,
   114.1, 117.53, 115.11,
    7.79,   2.55
]
*/
