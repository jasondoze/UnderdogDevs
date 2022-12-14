// function killKthBit(n, k) {
//   let binary = n.toString(2); // 1010
//   // if the index at 2 is a 1
//   if (binary[binary.length - k] == 1) {
//     // replace the 1 with a zero
//     binary = binary.substring(0, binary.length - k) + '0' + binary.substring(3);
//     // console.log(binary);
//     return parseInt(binary, 2);
//   } else {
//     return n;
//   }
// }
// console.log(killKthBit(10, 2));

// let countWords = (stringOfWords) => {
//   let obj = {};
//   if (stringOfWords === '') {
//     return {};
//   }
//   let split = stringOfWords.split(' ');
//   for (const i of split) {
//     if (!obj[i]) {
//       obj[i] = 1;
//     } else {
//       obj[i]++;
//     }
//   }
//   return obj;
// };

// var result1 = countWords('ask a bunch get a bunch');
// console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

// var result2 = countWords('');
// console.log('should log "{}":', result2);

function createSentence(words) {
  var sentence = '';
  for (var i = 0; i < words.length; i++) {
    sentence += words[i];
    console.log(sentence);
    if (i < words.length - 1) {
      sentence += ' ';
    }
  }
  sentence += '.';
  return sentence;
}

var result1 = createSentence(['I', 'am', 'worth', 'it']);
console.log('should log "I am worth it."', result1);

var result2 = createSentence(['My', 'problems', 'matter']);
console.log('should log "My problems matter.":', result2);
