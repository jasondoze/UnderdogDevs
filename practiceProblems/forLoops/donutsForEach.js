//   Your code sshould have an array named `donuts`
//   Your `donuts` array should call the `forEach()` method
//   Your `forEach()` loop should output the donut summaries
//   BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.

// This is an array of objects.
var donuts = [
  { type: 'Jelly', cost: 1.22 },
  { type: 'Chocolate', cost: 2.45 },
  { type: 'Cider', cost: 1.59 },
  { type: 'Boston Cream', cost: 5.99 },
];

donuts.forEach(function (donut) {
  console.log(donut.type + ' donuts cost $' + donut.cost + ' each');
});
