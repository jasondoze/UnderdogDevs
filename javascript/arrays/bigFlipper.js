// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.


let bigFlipper = (str, num) => {
  // create a flipped string
  let flipped = '';
  // split input string into an array
  let splitStr = str.split('');
  // iterate over the array of characters by num
  for (let i = 0; i < splitStr.length; i += num) {
    // slice the array from current position to current plus n
    let currentSlice = splitStr.slice(i, i + num);
    // reverse the array
    let reversed = currentSlice.reverse();
    // join the reversed array
    let joinedSlice = reversed.join('');
    // add resulting string to result
    flipped += joinedSlice;
  }
  return flipped;
};
let input = 'a short example';
let output = bigFlipper(input, 5);
console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'
