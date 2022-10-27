/*
Implement Merge Sort
Another common intermediate sorting algorithm is merge sort. Like quick sort, 
merge sort also uses a divide-and-conquer, recursive methodology to sort an array. 
It takes advantage of the fact that it is relatively easy to sort two arrays as long 
as each is sorted in the first place. But we'll start with only one array as input, 
so how do we get to two sorted arrays from that? Well, we can recursively divide the 
original input in two until we reach the base case of an array with one item. 
A single-item array is naturally sorted, so then we can start combining. 
This combination will unwind the recursive calls that split the original array, 
eventually producing a final sorted array of all the elements. The steps of merge sort, 
then, are:

1) Recursively split the input array in half until a sub-array with only one element 
is produced.

2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). 
This algorithm is popular because it is performant and relatively easy to implement.

As an aside, this will be the last sorting algorithm we cover here. However, 
later in the section on tree data structures we will describe heap sort, another efficient sorting method that requires a binary heap in its implementation.
*/

// left arr and right arr are sorted
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // continue running while...
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftElement = leftArr[leftIndex];
    const rightElement = rightArr[rightIndex];

    if (leftElement < rightElement) {
      output.push(leftElement);
      leftIndex++;
    } else {
      output.push(rightElement);
      rightIndex++;
    }
  }
  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

// recursive function that divides 2 arrays
const mergeSort = (array) => {
  // edge case for recursion
  if (array.length <= 1) {
    return array;
  }
  // divide arrays in half
  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};
console.log(
  mergeSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);

/* 
solution...
[
  1,    1,   2,   2,   4,
  8,   32,  43,  43,  55,
 63,   92, 123, 123, 234,
345, 5643
]

example...
[1, 4, 2, 8, 345]

[ 1, 4, 2] [ 8, 345 ]

[ 1, 4 ]  [2]  [ 8, 345 ]

[1] [4] [2] [8] [345]

[1, 4] [2, 8] [345]

[ 1, 2, 4, 8 ] [345]

[  1, 2, 4, 8, 345 ]
*/
