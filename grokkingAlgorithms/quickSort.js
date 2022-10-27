/*
Implement Quick Sort
Here we will move on to an intermediate sorting algorithm: quick sort. 
Quick sort is an efficient, recursive divide-and-conquer approach to 
sorting an array. In this method, a pivot value is chosen in the original array. 
The array is then partitioned into two subarrays of values less than and greater 
than the pivot value. We then combine the result of recursively calling the 
quick sort algorithm on both sub-arrays. This continues until the base case of 
an empty or single-item array is reached, which we return. The unwinding of the 
recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance 
on average. It is also relatively easy to implement. These attributes make it a 
popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as i
nput and returns an array of these integers in sorted order from least to greatest. 
While the choice of the pivot value is important, any pivot will do for our purposes 
here. For simplicity, the first or last element could be used.
*/

const quickSort = (array) => {
  // edge case if array has only one element
  if (array.length === 1) {
    return array;
  }
  // our pivot point in the array to pivot from, in quick sort its the end of the array
  const pivot = array[array.length - 1];
  // define sub arrays to arrange index elements
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  // if we have both a left and right array
  if (leftArr.length > 0 && rightArr.length > 0) {
    /*
    Recursively call the function to the left array, with the pivot in the 
    middle then call the function to the right array. The spread operator takes the 
    array and returns it as comma separated values like [1, 2, 3] => 1, 2, 3

    */
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    // if we dont have a right array
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
    // if we dont have a left array
  } else {
    return [pivot, ...quickSort(rightArr)];
  }
};
console.log(
  quickSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
