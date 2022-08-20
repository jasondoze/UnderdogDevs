/*Spread syntax (...) allows an iterable, such as an array or string, 
to be expanded in places where zero or more arguments (for function calls) 
or elements (for array literals) are expected. In an object literal, 
the spread syntax enumerates the properties of an object and adds the key-value 
pairs to the object being created.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the
opposite of rest syntax. Spread syntax "expands" an array into its elements, 
while rest syntax collects multiple elements and "condenses" them into a single element. 
*/

const temps = [89, 88, 99, 100];



function temperature(arr) {
  return Math.min(...arr);
}
console.log(temperature(temps)); 
//88



const chemovars = ['NL#4', 'White Widow', 'Warlock'];
console.log(...chemovars); 
// NL#4 White Widow Warlock



const parents = ['Karen', 'Kevin'];
const kiddos = ['Johnni', 'Versace', 'Rodolfo'];
console.log(...parents, 'Jason', ...kiddos, 'Ridonkulous');
// Karen Kevin Jason Johnni Versace Rodolfo Ridonkulous



const artwork = ['Caravaggio', 'Banksy', 'Basquiat', 'Folkert DeJong'];
const copies = [...artwork];
console.log(copies);
// [ 'Caravaggio', 'Banksy', 'Basquiat', 'Folkert DeJong' ]
copies.push('Katrina Fritsch');
console.log(copies);
/* [
  'Caravaggio',
  'Banksy',
  'Basquiat',
  'Folkert DeJong',
  'Katrina Fritsch'
]
*/


const colors = { brightRed: '#e55039', waterfallBlue: '#38ada9' };
const accents = { lightGrey: '#778ca3', swanWhite: '#f7f1e3' };
const palette = { ...colors, ...accents };
console.log(palette);
/*
{
  brightRed: '#e55039',
  waterfallBlue: '#38ada9',
  lightGrey: '#778ca3',
  swanWhite: '#f7f1e3'
}
*/
const newbie = { black: '#000000', ...colors, ...accents, hairy: "monkey" };
console.log(newbie);
/*
{
  black: '#000000',
  brightRed: '#e55039',
  waterfallBlue: '#38ada9',
  lightGrey: '#778ca3',
  swanWhite: '#f7f1e3',
  hairy: 'monkey'
}
*/
