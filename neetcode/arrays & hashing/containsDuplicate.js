const containsDuplicate = (nums) => {
  let numSet = new Set();
  for (const i of nums) {
    if (numSet.has(i)) {
      return true;
    } else {
      numSet.add(i);
    }
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

const containsDuplicate2 = (nums) => {
  const set = new Set(nums);
  const isEqual = set.size === nums.length;
  return !isEqual;
};
console.log(containsDuplicate2([1, 2, 3, 4]));
console.log(containsDuplicate2([1, 2, 3, 1]));
console.log(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

const containsDuplicate3 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return false;
    } else {
      return true;
    }
  }
};
console.log(containsDuplicate3([1, 2, 3, 4]));
console.log(containsDuplicate3([1, 2, 3, 1]));
console.log(containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));