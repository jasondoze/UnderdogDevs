import * as fs from 'fs';
import fetch from 'node-fetch';

// error first callback
// fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
//   if (err) {
//     console.error('ERROR');
//     console.error(err);
//   } else {
//     console.error('Got data');
//     console.log(data);
//   }
// });

// create a promise
// const myPromise = new Promise((resolve, reject) => {
//   const rando = Math.floor(Math.random() * 2);
//   if (rando === 0) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// myPromise
//   .then(() => console.log('Success'))
//   .catch(() => console.error('Something wrong'));

// fs readFile with promises
// fs.promises
//   .readFile('./test.txt', 'utf-8')
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// fetch with promises
// fetch('https://api.chucknorris.io/jokes/random')
// // this is the raw response that gets converted to json
//   .then((res) => res.json())
//   .then((data) => console.log(data.value))
//   .catch((err) => console.error(err));

// load file with async/await
// const loadFile = async () => {
//   try {
//     const data = await fs.promises.readFile('./test.txt', {
//       encoding: 'utf-8',
//     });
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// loadFile();

// fetch with async/await without error handling
const fetchNorris = async () => {
  try {
    const res = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await res.json();
    console.log(data.value);
  } catch (err) {
    console.log('ERROR!');
    console.error(err);
  }
};
fetchNorris();
