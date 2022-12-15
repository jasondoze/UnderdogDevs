function killKthBit(n, k) {
  let binary = n.toString(2); // 1010
  // if the index at 2 is a 1
  if (binary[binary.length - k] == 1) {
    // replace the 1 with a zero
    binary = binary.substring(0, binary.length - k) + '0' + binary.substring(3);
    // console.log(binary);
    return parseInt(binary, 2);
  } else {
    return n;
  }
}
// console.log(killKthBit(10, 2));

let countWords = (stringOfWords) => {
  let obj = {};
  if (stringOfWords === '') {
    return {};
  }
  let split = stringOfWords.split(' ');
  for (const i of split) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }
  return obj;
};

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

// var result1 = createSentence(['I', 'am', 'worth', 'it']);
// console.log('should log "I am worth it."', result1);

// var result2 = createSentence(['My', 'problems', 'matter']);
// console.log('should log "My problems matter.":', result2);

console.log('---------------*---------------');

function keyOfObjectValue(object, target) {
  for (var key in object) {
    if (object[key] === target) {
      return key;
    }
  }
  return -1;
}
// var result1 = keyOfObjectValue({ cucumbers: 14, carrots: 20, peas: 400 }, 20);
// console.log('should log "carrots":', result1);

// var result2 = keyOfObjectValue(
//   { name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham' },
//   'Superman'
// );
// console.log('should log -1:', result2);

console.log('---------------*---------------');

/*
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. If input array is empty, your function should return 0.
*/

const computeAverageOfNumbers = (numArray) => {
  if (numArray == 0) {
    return 0;
  }
  let average = numArray.reduce((prev, curr) => prev + curr, 0);
  return average / numArray.length;
};

// var input1 = [1, 2, 3, 4, 5];
// var result1 = computeAverageOfNumbers(input1);
// console.log('should log 3:', result1);

// var input2 = [];
// var result2 = computeAverageOfNumbers(input2);
// console.log('should log 0:', result2);

console.log('---------------*---------------');

const filterOddElements = (nums) => {
  let filtered = nums.filter((element) => {
    if (element % 2 === 1) {
      return element;
    } else if (!element % 2 === 1) {
      return [];
    }
  });
  return filtered;
};
// var output = filterOddElements([1, 2, 3, 4, 5]);
// console.log(output); // --> [1, 3, 5]

console.log('---------------*---------------');

const generateCombinations = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      console.log(`${array1[i]} ${array2[j]}`);
    }
  }
};
// generateCombinations([1, 2], ['buckle', 'my', 'shoe']);
// generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);

console.log('---------------*---------------');

const loopAnObjectOfArrays = (objectOfArrays) => {
  for (const key in objectOfArrays) {
    for (let i = 0; i < objectOfArrays[key].length; i++) {
      console.log(objectOfArrays[key][i]);
    }
  }
};

// loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// loopAnObjectOfArrays({
//   third: [false, false],
//   fourth: ['runs'],
//   ninth: ['q', 'l', 'z'],
// });

// const loopAnArrayOfObjects = (arrayOfObjects) => {
//   for (const i of arrayOfObjects) {
//     // console.log(i);
//     for (const j in i) {
//       console.log(i[j]);
//     }
//   }
// };

// loopAnArrayOfObjects([{ a: 1, b: 2 }, { z: 5, y: 6 }, { q: 14 }]);
// console output:
// 1
// 2
// 5
// 6
// 14

// loopAnArrayOfObjects([
//   { queue: false, stack: true },
//   { fish: 'swims' },
//   { shirt: 's', pop: 'p', eye: 'e' },
// ]);
// console output:
// false
// true
// swims
// s
// p

console.log('---------------*---------------');

const loopAnObjectOfObjects = (nestedObject) => {
  for (const key in nestedObject) {
    for (const value in nestedObject[key]) {
      console.log(nestedObject[key][value]);
    }
  }
};

// loopAnObjectOfObjects({ a: { a: 1, b: 2 }, b: { a: 5, b: 6 } });
// loopAnObjectOfObjects({
//   structures: { queue: true, stack: false },
//   plantLife: { tree: 'leaves' },
//   letters: { apple: 'a', bag: 'b', cats: 'c' },
// });

const loopAnArrayOfArrays = (arrayOfArrays) => {
  for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
      console.log(arrayOfArrays[i][j]);
    }
  }
};

// loopAnArrayOfArrays([
//   ['a', 'b', 'c'],
//   ['d', 'e', 'f'],
// ]);
// loopAnArrayOfArrays([[1, 2], [3, 4], [5], [6, 7, 8]]);
// console.log('---------------*---------------');

const loopOverValues = (object) => {
  for (let key in object) {
    console.log(object[key]);
  }
};

// loopOverValues({ a: 1, b: 2, c: 3 });
// console output:
// 1
// 2
// 3

// loopOverValues({ make: 'Ford', model: 'T', year: 1913 });
// console output:
// Ford
// T
// 1913

console.log('---------------*---------------');

const useBreak = (array, index) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array.indexOf(array[i]) >= index) {
      break;
    }
  }
};
// useBreak([1, 2, 3, 4, 5, 6], 3);

console.log('---------------*---------------');

const useContinue = (array, index) => {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === index) {
      continue;
    }
    console.log(array[i]);
  }
};
useContinue(['a', 'b', 'c', 'd'], 1);
// console output:
// a
// c
// d

useContinue([1, 2, 3, 4], 2);
// console output:
// 1
// 2
// 4

console.log('---------------*---------------');

const loopEveryOther = (array) => {
  for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
  }
};

loopEveryOther([1, 2, 3, 4, 5]);
// console output:
// 1
// 5

function loopAStringAgain(string) {
  // create a loop which iterates over the input string
  // log current string character to the console
  let st = string.split('');
  for (let i = 0; i < st.length; i++) {
    console.log(st[i]);
  }
}
// loopAStringAgain('abcd');

console.log('---------------*---------------');

const loopAString = (string) => {
  let index = 0;

  while (index < string.length) {
    console.log(string.substring(index, index + 1));
    index++;
  }
};

// loopAString('nodeJS');
// console output:
// n
// o
// d
// e
// J
// S

// loopAString('abcd');
// console output:
// a
// b
// c
// d
console.log('---------------*---------------');

const loopAnArray = (array) => {
  let i = 0;
  while (i < array.length) {
    console.log(array.slice(i, i + 1));
    i++;
  }
};

// loopAnArray(['a', 'b', 'c', 'd']);
// console output:
// a
// b
// c
// d

// loopAnArray([1, 2, 3, 4, 5]);
// console output:
// 1
// 2
// 3
// 4
// 5

console.log('---------------*---------------');

function removeAnElementInGeneral(array, index) {
  // remove the element from the array at the index given
  array.splice(index, 1);
  // return the array
  return array;
}

// var resultArray1 = removeAnElementInGeneral([8, 9, 10, 'bad entry', 11], 3);
// console.log('should log [8, 9, 10, 11]:', resultArray1);

// var resultArray2 = removeAnElementInGeneral(['one', 'two', 452, 'three'], 2);
// console.log('should log ["one", "two", "three"]:', resultArray2);

function applySplice(array, index, item1, item2) {
  // remove two elements from the array at the index given, and adds item1 and item2 in their place
  // return the array
  array.splice(index, 2, item1, item2);
  return array;
}

var resultArray1 = applySplice(
  [8, 9, 10, 'bad entry1', 'bad entry2', 13],
  3,
  11,
  12
);
console.log('should log [8, 9, 10, 11, 12, 13]:', resultArray1);

var resultArray2 = applySplice(
  ['one', 'two', 452, 672, 'five'],
  2,
  'three',
  'four'
);
console.log(
  'should log ["one", "two", "three", "four", "five"]:',
  resultArray2
);
