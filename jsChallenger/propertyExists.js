// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists

const myFunction = (a, b) => {
  if (Object.keys(a).includes(b)) {
    return true;
  } else {
    return false;
  }
};

console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'));
// Expected
// true
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'a'));
// Expected
// false
console.log(myFunction({ x: 'a', y: 'b', z: undefined }, 'z'));
// Expected
// true

// refactor
// The in operator returns true if the specified property is in 
// the specified object or its prototype chain.
const myFunction2 = (a, b) => {
  return b in a;
};

console.log(myFunction2({ a: 1, b: 2, c: 3 }, 'b'));
// Expected
// true
console.log(myFunction2({ x: 'a', y: 'b', z: 'c' }, 'a'));
// Expected
// false
console.log(myFunction2({ x: 'a', y: 'b', z: undefined }, 'z'));
// Expected
// true