const fs = require('fs');
const finalsArray = fs
  .readFileSync('nbaFinals.csv')
  .toString()
  .toLowerCase()
  .split('\r\n');

console.log(finalsArray);

/*
Print out a ranking of who has won the MVP more than once, 
by times won, e.g. this output:
- 6 times: Michael Jordan
- 3 times: Shaquille O'Neal, LeBron James
- 2 times: 
*/
// break into chunks
// chunk 0 is parsing
// Jason: I want an array []
// Jacob: what will elements of array look like
// Jacob: default might be a dict/object 
// {year: number, winner: string, "loser": string, "score": string, "mvp": string}
// Jacob: function mvpCounts(data) {} -- data will be an arrry of this form
// Jacob: what format should mvpCounts return
// Jacob: function parse(text) {} -- needs to return an array of dicts-per-finals
// mvpCounts(parse(s))

// example input to mvpCounts is data = 
// [{year: 2021, winner: 'Warriors', loser: 'Celtics', score: '4-2', mvp: 'Steph Curry'}]
// example ouput from mvp is counts = ... 
// {"4": ["Larry Bird", "Steph Curry"],
//  "1": ["Magic Johnson"]
// }
// [{players: ["Magic Johnson"], count: 1}, {players: ["Larry Bird", "Steph Curry"], count: 4}]


// a dict/object, key is amount of times, value is a list of player names

/*

  function topLevel(s) { // every question in the question bank probably has a topLevel that 
    takes a string, returns nothing, and prints some stuff along the way
    data = parse(s);
    counts = mvpCounts(data);
    display(counts);
  }

*/

// Input- array of strings
// Output- object
// iterate throught the array
// assign a row variable to each line of data
// assign an MVP variable
// assign a count variable

function rankingMVP(stats) {
  for (let i = 1; i < stats.length; i++) {
    let row = stats[i];
    console.log(row);
  }
}

console.log(rankingMVP(finalsArray));
