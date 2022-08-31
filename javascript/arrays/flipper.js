// write a function that flips every pair of characters in a string
let flipPairs = (str) => {
  let flipStr = '';
  // iterate over the string incrementing by two
  for (let i = 0; i < str.length; i += 2) {
    // check if the next character is undefined
    if (input[i + 1] === undefined) {
      // grab the next character and add it to the result
      flipStr += input[i];
      break;
    }
    // console.log(i);
    // grab next character and add to result
    flipStr += str[i + 1];
    console.log(`${flipStr}, ${i} `);
    flipStr += str[i];
    // grab current character and add to result
    console.log(`${flipStr}, ${i} `);
  }

  return flipStr;
};
// Example:
let input =
  "check out how interesting this problem is, it's insanely interesting!";

console.log(flipPairs(input)); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
