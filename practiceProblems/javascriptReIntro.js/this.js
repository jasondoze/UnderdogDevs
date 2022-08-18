/*
Note on the this keyword. Used inside a function, this refers to the current object. 
What that actually means is specified by the way in which you called that function. 
If you called it using dot notation or bracket notation on an object, that object becomes this. 
If dot notation wasn't used for the call, this refers to the global object.
*/

// function makePerson(first, last) {
//   return {
//     first: first,
//     last: last,
//     fullName() {
//       return `${this.first} ${this.last}`;
//     },
//     fullNameReverse() {
//       return `${this.last} ${this.first}`;
//     },
//   };
// }

// const makeIt = makePerson('Jason', 'Chadwick');
// console.log(makeIt.fullName());
// console.log(makeIt.fullNameReverse());

// We can take advantage of the this keyword to improve our makePerson function:
/*
We have introduced another keyword: new. new is strongly related to this. 
It creates a brand new empty object, and then calls the function specified, 
with this set to that new object. Notice though that the function specified 
with this does not return a value but merely modifies the this object. 
It's new that returns the this object to the calling site. Functions that are 
designed to be called by new are called constructor functions. Common practice 
is to capitalize these functions as a reminder to call them with new.
*/
// function Person(first, last) {
//   this.first = first;
//   this.last = last;
//   this.fullName = function () {
//     return `${this.first} ${this.last}`;
//   };
//   this.fullNameReverse = function () {
//     return `${this.last} ${this.first}`;
//   };
// }
// const makeItTwo = new Person('Simon', 'Williams');
// console.log(makeItTwo.fullName(), makeItTwo.fullNameReverse());
// console.log(fullName());

/*
Our person objects are getting better, but there are still some ugly edges to them. 
Every time we create a person object we are creating two brand new function objects 
within it — wouldn't it be better if this code was shared?
*/

function personFullName() {
  return `${this.first}, ${this.last}`;
}

function fullNameReversed() {
  return `${this.last}, ${this.first}`;
}

function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = fullNameReversed;
}
const person1 = new Person('Jason', 'Chadwick');
// console.log(personFullName(person1));
console.log(person1.fullName(), person1.fullNameReversed());

/*
That's better: we are creating the method functions only once, 
and assigning references to them inside the constructor. 
Can we do any better than that? The answer is yes: see .prototype
*/
