// selection sort

const array = [7, 9, 3, 5, 15, 10, 0];

/*
const arr = [7, 9, 3, 5, 15, 10, 0];
smallestVal = 7
smallestVal = 3
smallestVal = 0
const arr = [0, 9, 3, 5, 15, 10, 7];
smallestVal = 9
smallestVal = 3
const arr = [0, 3, 9, 5, 15, 10, 7];
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // refactor
    // const temp = arr[i];
    // arr[i] = arr[minIndex];
    // arr[minIndex] = temp;
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

// console.log(selectionSort(array));

const sorted = (arr) => {
  let sorter = arr.sort((a, b) => {
    return a - b;
  });
  return sorter;
};
console.log(sorted(array));
