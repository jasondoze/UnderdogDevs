/*
Implement Insertion Sort
The next sorting method we'll look at is insertion sort. 
This method works by building up a sorted array at the beginning of the list. 
It begins the sorted array with the first element. 
Then it inspects the next element and swaps it backwards into the sorted array 
until it is in sorted position. It continues iterating through the list
and swapping new items backwards into the sorted portion until it reaches
the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input
and returns an array of these integers in sorted order from least to greatest.

Waiting:insertionSort should be a function.
Waiting:insertionSort should return a sorted array (least to greatest).
Waiting:insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return an array that is unchanged except for order.
Waiting:insertionSort([5, 4, 33, 2, 8]) should return [2, 4, 5, 8, 33].
Waiting:insertionSort should not use the built-in .sort() method.
*/

const insertionSort = (array) => {
  // the first for loop i will keep track of the next value in the array
  for (let i = 1; i < array.length; i++) {
    // the second for loop j will be comparing iteration to the next i value
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        // swap the values
        // const temp = array[j];
        // array[j] = array[j - 1];
        // array[j - 1] = temp;
        // refactor
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        break;
      }
    }
  }
  return array;
};
console.log(
  insertionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
