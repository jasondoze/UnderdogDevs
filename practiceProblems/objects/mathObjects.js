// Math object

console.log(Math);

console.log(Math.PI);

console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

// function mvpCounts(stats) {
//   const counts = {};
//   for (const year in stats) {
//     for (const mvp of stats[year]) {
//       if (!counts[mvp]) {
//         counts[mvp] = 0;
//       }
//       counts[mvp]++;
//     }
//   }
//   return counts;
// }
// console.log(mvpCounts(rankingMVP(input)));
