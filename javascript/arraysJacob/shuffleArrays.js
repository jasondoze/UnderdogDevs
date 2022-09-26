// Shuffle the array
// Imagine the supplied array is like a pack of cards. Write a function to
// shuffle this array in to a completely new and entirely random order, much
// like shuffling a pack of cards.

// create a return array variable
// iterate through the array
// randomize the indexes of the array
// push the randomized indexes into the return array

// const shuffle = (someArray) => {
//   let returnArray = [];
//   for (let i = 0; i < someArray.length; i++) {
//     let number = someArray[i];
//     let indexes = someArray.indexOf(number);
//     let random = Math.random();
//     console.log(number, indexes, random);

//     // console.log(min, max, i);
//   }
//   //
// };

// console.log(shuffle([10, 12, 15])); // [12, 15, 10]

// shuffle using sort method
const shuffle2 = (someArray) => {
  let shuffled = someArray.sort((a, b) => 0.5 - Math.random());
  return shuffled;
};

console.log(shuffle2([10, 12, 15])); // [12, 15, 10]



// Fisher Yates algorithm for shuffling
const shuffle3 = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    console.log(`Affecting index position ${i} of the array`);
    // get a random number ranging between 0 and (i + 1)
    let j = Math.floor(Math.random() * (i + 1));
    console.log(`Generating a random number between index 0 and index ${i}`);
    console.log(`Generated ${j}`);
    let temp = someArray[j];
    console.log(`Temp1 = ${temp}`);
    someArray[j] = someArray[i];
    console.log(
      `Swap values found at index ${j} and index ${i} `
    );
    someArray[i] = temp;

  }

  return someArray;
  //
};

console.log(shuffle3([10, 12, 15, 9, 5, 3, 22])); // [12, 10, 5, 9, 22, 3, 15]
