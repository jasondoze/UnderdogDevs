const assert = require("assert");

// const text2 = "The brown fox";
// const splitBySpace = text2.split(" ");
// const a2 = [];
// a2.push("The");
// a2.push("brown");
// a2.push("fox");
// assert.equal(4, a2.length);
// assert.deepEqual(splitBySpace, a2);

const assert = require("assert");
const text = "United States\nBolivia";
const splitByA = text.split("a");
const a = [];
// Jason fill in 16-18 to make this work
a.push("United St"); // first element
a.push("tes\nBolivi"); // second element
a.push(""); // third element
assert.equal(3, a.length);
assert.deepEqual(splitByA, a);

console.log("Everything worked!");
