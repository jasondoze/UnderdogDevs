// You will be given an array that contains two strings. Your job is to create a
// function that will take those two strings and transpose them, so that the
// strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return:
// H W
// e o
// l r
// l l
// o d

let transposeTwoStrings = (array) => {
  let newString = '';

  let splitStr1 = array[0].split('');
  let splitStr2 = array[1].split('');
  for (let i = 0; i < splitStr1.length; i++) {
    newString += `${splitStr1[i]} ${splitStr2[i]}\n`;
  }
  return newString;
};

console.log(transposeTwoStrings(['Hello', 'World']));
