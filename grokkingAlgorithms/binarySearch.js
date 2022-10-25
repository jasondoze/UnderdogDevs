/*
A binary search must have a sorted set of values.
The binary search breaks the data in half, then evaluates within those halfs
*/

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (val, arr) => {
  // counter for the amount of iterations it takes to solve
  let tries = 0;
  // initialize the lower end of the list
  let lower = 0;
  // initialize the higher end of the list
  let upper = arr.length - 1;
  // iterate while 0 is less than or equal to length of the list
  while (lower <= upper) {
    // count the iterations
    tries++;
    console.log(`try counter ${tries}`);
    /* initialize the middle of the list by adding the lowest list value 0
    to 10 - 0 or 10 divided by 2. Getting 5
    */
    const middle = lower + Math.floor((upper - lower) / 2);
    // if the value === array[middle index]
    if (val === arr[middle]) {
      // return that index
      return middle;
    }
    // the value is less than array[middle index]
    if (val < arr[middle]) {
      /* reassign upper to middle -1, moving the iteration from the middle to 
      the beginning of the index
      */
      upper = middle - 1;
      // otherwise move to the end of the index
    } else {
      lower = middle + 1;
    }
  }
  // if no conditions are met return -1
  return -1;
};

console.log(binarySearch(9, values));
