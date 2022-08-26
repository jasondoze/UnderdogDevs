// Write a JavaScript program which accept a number as input and
// insert dashes (-) between each two even numbers. For example if
// you accept 025468 the output should be 0-254-6-8.

let dasher = (nums) => {
  let result = [nums[0]];
  // console.log(result, 'result');

  for (let i = 1; i < nums.length; i++) {
    console.log(nums[i], 'nums[i]');
    if (nums[i - 1] % 2 === 0 && nums[i] % 2 === 0) {
      // console.log(nums[i - 1] % 2 == 0, 'i - 1');
      // console.log(nums[i] % 2 == 0, 'i');

      result.push('-', nums[i]);
      // console.log(result, 'result 2');
    } else {
      result.push(nums[i]);
      // console.log(result, 'result 3');
    }
  }
  return result.join('');
};
console.log(dasher('023468')); // 0-234-6-8

/*
[ '0' ] result

2 nums[i]

true i - 1
true i

[ '0', '-', '2' ] result 2

3 nums[i]

[ '0', '-', '2', '3' ] result 3

4 nums[i]

[ '0', '-', '2', '3', '4' ] result 3

6 nums[i]

true i - 1
true i

[
  '0', '-', '2',
  '3', '4', '-',
  '6'
] result 2

8 nums[i]

true i - 1
true i

[
  '0', '-', '2',
  '3', '4', '-',
  '6', '-', '8'
] result 2

*/
