/*
Person.prototype is an object shared by all instances of Person. 
It forms part of a lookup chain (that has a special name, "prototype chain"): 
any time you attempt to access a property of Person that isn't set, JavaScript 
will check Person.prototype to see if that property exists there instead. 
As a result, anything assigned to Person.prototype becomes available to all 
instances of that constructor via the this object.

This is an incredibly powerful tool. JavaScript lets you modify something's 
prototype at any time in your program, which means you can add extra methods to 
existing objects at runtime:
*/

function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function () {
  return `${this.first}, ${this.last}`;
};

Person.prototype.reversedName = function () {
  return `${this.last}, ${this.first}`;
};

const s = new Person('Simon', 'Williams');
console.log(s.fullName(), s.reversedName());
// Simon, Williams Williams, Simon
console.log(s.toString());
// [object Object]

Person.prototype.firstNameCaps = function () {
  return this.first.toUpperCase();
};

console.log(s.firstNameCaps());
// SIMON

/*
Interestingly, you can also add things to the prototype of built-in JavaScript 
objects. Let's add a method to String that returns that string in reverse:
*/

const str = 'Simon';
const strLit = 'This can now be reversed';

String.prototype.reversed = function () {
  let reverse = '';
  for (let i = this.length - 1; i >= 0; i--) {
    reverse += this[i];
  }
  return reverse;
};
console.log(str.reversed(), strLit.reversed());
// nomiS   // desrever eb won nac sihT
console.log('this can also be reversed'.reversed());
// desrever eb osla nac siht

/*
As mentioned before, the prototype forms part of a chain. The root of that chain is 
Object.prototype, whose methods include toString() — it is this method that is called 
when you try to represent an object as a string. This is useful for debugging our 
Person objects:
*/

Person.prototype.toString = function () {
  return `<Person: ${this.fullName()}>`;
};
console.log(s.toString());
// <Person: Simon, Williams>

/*
Remember how avg.apply() had a null first argument? We can revisit that now. 
The first argument to apply() is the object that should be treated as 'this'. 
For example, here's a trivial implementation of new:
*/
function trivialNew(constructor, ...args) {
  const obj = {};
  constructor.apply(obj, args);
  return obj;
}
// console.log(trivialNew());
// undefined



/*
This isn't an exact replica of new as it doesn't set up the prototype chain 
(it would be difficult to illustrate). This is not something you use very often, 
but it's useful to know about. In this snippet, ...args (including the ellipsis) 
is called the "rest arguments" — as the name implies, this contains the rest of 
the arguments.
*/
const bill = trivialNew(Person, ' William', 'Orange');
console.log(bill);
// { first: ' William', last: 'Orange' }

// is therefore almost equivalent to
const billz = new Person('William', 'Orange');
console.log(billz);
// Person { first: 'William', last: 'Orange' }



/*
apply() has a sister function named call, which again lets you set this but takes 
an expanded argument list as opposed to an array.
*/

function lastNameCaps() {
  return this.last.toUpperCase();
}
console.log(lastNameCaps.call(s))
// WILLIAMS

// Is the same as:
// s.lastNameCaps = lastNameCaps;