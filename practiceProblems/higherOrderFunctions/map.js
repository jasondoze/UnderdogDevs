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

