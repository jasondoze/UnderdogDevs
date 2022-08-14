const symbols = {
  yt: 'You Tube',
  ig: 'Instagram',
  mt: 'Meta',
  nf: 'Netflix',
  az: 'Amazon',
};

// For in loop- for objects
// for (const i in symbols) {
//   // console.log(i);
//   // console.log(symbols[i]);
//   console.log(`Key is ${i} and value is: ${symbols[i]}`);
// }

for (let key in symbols) {
  console.log(`The intials ${key} describe ${symbols[key]}`);
}
