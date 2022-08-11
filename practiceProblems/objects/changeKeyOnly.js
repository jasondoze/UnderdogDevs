// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

// change the key to a new string, delete the old key string
// merge the objects with .assign
function myFunction(obj1, obj2) {
  obj2.d = obj2.b;
  delete obj2.b;
  return Object.assign(obj1, obj2);
}

console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));