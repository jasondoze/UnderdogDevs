// Array.prototype.sort()
// The sort() method sorts the elements of an array in place and returns 
// the reference to the same array, now sorted. The default sort order is ascending, 
// built upon converting the elements into strings

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



// Sort by the lowest number year e.g. 2009 instead of 2019
// The code sorts the data set into ascending order by year.
const sortedTeamYears = stats.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log(sortedTeamYears);
/*
[
  { year: 2008, team: 'Miami Heat', score: '4-2', mvp: 'Beelzebub' },
  {
    year: 2009,
    team: 'Toronto Raptors',
    score: '4-2',
    mvp: 'Kobe Bryant'
  },
  {
    year: 2011,
    team: 'Cleveland Cavaliers',
    score: '4-2',
    mvp: 'Shaq'
  },
  {
    year: 2012,
    team: 'Los Angeles Lakers',
    score: '4-2',
    mvp: 'Michael Jordan'
  },
  {
    year: 2013,
    team: 'Boston Celtics',
    score: '4-2',
    mvp: 'Dirk Nowitzki'
  },
  {
    year: 2014,
    team: 'Oklahoma City Thunder',
    score: '4-2',
    mvp: 'LeBron James'
  },
  {
    year: 2015,
    team: 'Miami Heat',
    score: '4-3',
    mvp: 'Kawhi Leonard'
  },
  {
    year: 2016,
    team: 'San Antonio Spurs',
    score: '4-2',
    mvp: 'Andre Iguodala'
  },
  {
    year: 2017,
    team: 'Golden State Warriors',
    score: '4-1',
    mvp: 'Kevin Durant'
  },
  {
    year: 2019,
    team: 'Toronto Raptors',
    score: '4-2',
    mvp: 'Kawhi Leonard'
  }
  */


// Sort ages, sorts the data set into ascending order by year.
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
/*
[
  23, 23, 32, 32, 33, 33,
  38, 41, 43, 44, 45, 52,
  56, 56
]
*/



// Sort ages, sorts the data set into descending order by year.
const sortAges2 = ages.sort((a, b) => b - a);
console.log(sortAges2);
/*
[
  56, 56, 52, 45, 44, 43,
  41, 38, 33, 33, 32, 32,
  23, 23
]
*/