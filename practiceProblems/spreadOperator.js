const temps = [89, 88, 99, 100];

function temperature(arr) {
  return Math.min(...arr);
}
console.log(temperature(temps)); //88

const chemovars = ['NL#4', 'White Widow', 'Warlock'];
console.log(...chemovars); // NL#4 White Widow Warlock

const parents = ['Karen', 'Kevin'];
const kiddos = ['Johnni', 'Versace', 'Rodolfo'];
console.log(...parents, 'Jason', ...kiddos, 'Ridonkulous');
// Karen Kevin Jason Johnni Versace Rodolfo Ridonkulous

const artwork = ['Caravaggio', 'Banksy', 'Basquiat', 'Folkert DeJong'];
const copies = [...artwork];
console.log(copies);
copies.push('Katrina Fritsch');
console.log(copies);

const colors = { brightRed: '#e55039', waterfallBlue: '#38ada9' };
const accents = { lightGrey: '#778ca3', swanWhite: '#f7f1e3' };
const palette = { ...colors, ...accents };
console.log(palette);
const newbie = { black: '#000000', ...colors, ...accents, hairy: "monkey" };
console.log(newbie);
