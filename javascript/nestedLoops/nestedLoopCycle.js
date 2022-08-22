var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100],
];

//    - Use a nested `for` loop to cycle through `numbers`.
//    - Convert each even number to the string "even"
//    - Convert each odd number to the string "odd"
let even = '';
let odd = '';
for (let rows of numbers) {
  for (let nums of rows) {
    if (nums % 2 === 0) {
      even += 'even ';
    } else {
      odd += 'odd ';
    }
  }
}
console.log(even, odd);
console.log('=======================================');

for (let i = 1; i <= 5; i++) {
  console.log(i);
  console.log('beginning j');
  for (let j = 1; j <= 3; j++) {
    console.log(`  ${j}`);
  }
  console.log('finishing j');
}
/*
1
beginning j
  1
  2
  3
finishing j
2
beginning j
  1
  2
  3
finishing j
3
beginning j
  1
  2
  3
finishing j
4
beginning j
  1
  2
  3
finishing j
5
beginning j
  1
  2
  3
finishing j
*/
console.log('=======================================');
// no duplicates pairs in the array
let array = ['red', 'blue', 'green', 'orange'];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    console.log(array[i], array[j]);
  }
}
/*
red blue
red green
red orange
blue green
blue orange
green orange
*/

console.log('=======================================');
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
/*
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
4 1
4 2
4 3
*/
console.log('=======================================');
for (let n = 0; n < 2; n++) {
  console.log('n=' + n);
  for (let m = 0; m < 5; m++) {
    console.log('   m=' + m);
  }
  console.log('n=' + n);
}
/*
n= 0
  m= 0
  m= 1
  m= 2
  m= 3
  m= 4
n= 0

n= 1
  m= 0
  m= 1
  m= 2
  m= 3
  m= 4
n= 1
*/
console.log('=======================================');
let friends = ['philip', 'abby', 'phelipe', 'simcha'];

for (let i = 0; i < friends.length; i++) {
  for (let j = 0; j < friends.length; j++) {
    console.log(friends[i], friends[j]);
  }
}
/*
phillip phillip
phillip adddy
phillip phelipe
phillip simcha
abby    philip
abby    abby
abby    phelipe
abby    simcha
phelipe philip
phelipe abby
phelipe phelipe
phelipe simchea
simcha  philip
simcha  abby
simcha  phelipe
simcha  simcha
*/
console.log('=======================================');
let locations = ['flatbush', 'williamsburg', 'bushwick', 'greenpoint'];
// let locations = ["flatbush", "williamsburg", "bushwick", "greenpoint"];
for (let i = 0; i < locations.length; i++) {
  for (let j = i + 1; j < locations.length; j++) {
    console.log(locations[i], locations[j]);
  }
}
/*
flatbush      williamsburg
flatbush      bushwick
flatbush      greenpoint
williamsburg  bushwick
williamsburg  greenpoint
bushwick      greenpoint
*/

console.log('=======================================');
let colors = ['red', 'purple', 'orange'];
// let colors = ['red', 'purple', 'orange'];
for (let i = 0; i < colors.length; i++) {
  let colorStr = colors[i];
  console.log(colorStr);

  for (let j = 0; j < colorStr.length; j++) {
    let char = colorStr[j];
    console.log(char);
  }
}
/*
red 
r
e
d
purple
p
u
r
p
l
e
orange
o
r
a
n
g
e
*/
