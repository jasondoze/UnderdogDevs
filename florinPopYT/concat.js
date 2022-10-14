// concat merges two or more arrays, doesnt modify the array
const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];
const c = a.concat(b, d);
console.log(c);


// use concat as a push method
const a1 = [1, 2, 3];
const b1 = [4, 5, 6];
const d1 = [7, 8, 9];
// add 1 and 2 and append a1
const c1 = a1.concat(1, 2, a1);
console.log(c1);