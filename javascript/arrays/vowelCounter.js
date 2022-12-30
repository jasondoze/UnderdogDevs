// count the vowels in a string

const vowelCount = string => {
  let count = 0;
  if (string.match(/[aeiou]/gi)) {
    // // Set the count to the length of the array of vowels
    count = string.match(/[aeiou]/gi).length;
  }
  return count;
}
console.log(vowelCount('bdk jdflz'))
console.log(vowelCount('bdka jdflbeaz'))

const vCount = (string) => {
  let vowelCount = 0;
  for (let char of string) {
    if (/[aeiou]/gi.test(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
};
console.log(vCount('bdk jdflz'));
console.log(vCount('bdka jdflbeaz'));