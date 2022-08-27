let smallestNum = (nums) => {
  if (nums.length === 0) {
    return null;
  }
  let smallestInt = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let myNum = nums[i];
    // if the num i'm iterating through is smaller than the smallest stored
    // then replace the smallest with that num
    if (myNum < smallestInt) {
      smallestInt = myNum;
    }
  }
  return smallestInt;
};

console.log(smallestNum([5, 6, 7, 7, 8, 9]));
console.log(smallestNum([]));