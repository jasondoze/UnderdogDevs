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
for (let i = 0; i < stats.length; i++) {
  console.log([i]);
}
/*
[ 0 ]
[ 1 ]
[ 2 ]
[ 3 ]
[ 4 ]
[ 5 ]
[ 6 ]
[ 7 ]
[ 8 ]
[ 9 ]
*/



// For Each
stats.forEach(function (stat) {
  console.log(stat.year, ...'monkey', stat.score);
});
/*
2019 m o n k e y 4-2
2017 m o n k e y 4-1
2016 m o n k e y 4-2
2015 m o n k e y 4-3
2014 m o n k e y 4-2
2013 m o n k e y 4-2
2012 m o n k e y 4-2
2011 m o n k e y 4-2
2009 m o n k e y 4-2
2008 m o n k e y 4-2
*/



let yearTotal = 0;
stats.forEach((stat) => {
  yearTotal += stat.year;
});
console.log(yearTotal);
// 20134

// Combine methods
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);
// 1102