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
let potentiallyJesus = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] <= 33) {
    potentiallyJesus.push(ages[i]);
  }
}
console.log(potentiallyJesus);
// [ 33, 32, 23, 32, 23, 33 ]



// Filter ES6
const potentiallyJesus3 = ages.filter((age) => age <= 33);
console.log(potentiallyJesus3);
// [ 33, 32, 23, 32, 23, 33 ]



// Filter teams ES6
const filterTeams2 = stats.filter((stats) => stats.year >= 2012);
console.log(filterTeams2);
/*
[
  {
    year: 2019,
    team: 'Toronto Raptors',
    score: '4-2',
    mvp: 'Kawhi Leonard'
  },
  {
    year: 2017,
    team: 'Golden State Warriors',
    score: '4-1',
    mvp: 'Kevin Durant'
  },
  {
    year: 2016,
    team: 'San Antonio Spurs',
    score: '4-2',
    mvp: 'Andre Iguodala'
  },
  {
    year: 2015,
    team: 'Miami Heat',
    score: '4-3',
    mvp: 'Kawhi Leonard'
  },
  {
    year: 2014,
    team: 'Oklahoma City Thunder',
    score: '4-2',
    mvp: 'LeBron James'
  },
  {
    year: 2013,
    team: 'Boston Celtics',
    score: '4-2',
    mvp: 'Dirk Nowitzki'
  },
  {
    year: 2012,
    team: 'Los Angeles Lakers',
    score: '4-2',
    mvp: 'Michael Jordan'
  }
]
*/



// Filter teams ES6 with conditional
const filterTeams3 = stats.filter(
  (stats) => stats.year >= 2012 && stats.year <= 2019
);
console.log(filterTeams3);
/*
[
  {
    year: 2019,
    team: 'Toronto Raptors',
    score: '4-2',
    mvp: 'Kawhi Leonard'
  },
  {
    year: 2017,
    team: 'Golden State Warriors',
    score: '4-1',
    mvp: 'Kevin Durant'
  },
  {
    year: 2016,
    team: 'San Antonio Spurs',
    score: '4-2',
    mvp: 'Andre Iguodala'
  },
  {
    year: 2015,
    team: 'Miami Heat',
    score: '4-3',
    mvp: 'Kawhi Leonard'
  },
  {
    year: 2014,
    team: 'Oklahoma City Thunder',
    score: '4-2',
    mvp: 'LeBron James'
  },
  {
    year: 2013,
    team: 'Boston Celtics',
    score: '4-2',
    mvp: 'Dirk Nowitzki'
  },
  {
    year: 2012,
    team: 'Los Angeles Lakers',
    score: '4-2',
    mvp: 'Michael Jordan'
  }
]
*/
