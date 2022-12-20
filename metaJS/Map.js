/* A map can feel very similar to an object in JS.
However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
*/

let bestBoxers = new Map();
bestBoxers.set(1, 'the champ');
bestBoxers.set(2, 'runner up');
bestBoxers.set(3, 'third place');

console.log(bestBoxers); // Map(3) { 1 => 'the champ', 2 => 'runner up', 3 => 'third place' }

// To get a specific value, you need to use the get() method.

console.log(bestBoxers.get(1)); // the champ
