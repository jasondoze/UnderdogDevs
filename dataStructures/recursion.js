// /recursion, when a function calls itself

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log('Hooray');
}
countDown(5);

console.log('------------------');

function countDownRecursive(n) {
  // base case to break out of recursion, break out statement
  if (n <= 0) {
    console.log('Hooray');
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}
countDownRecursive(3);

/*
countDownRecursive(3);
  countDownRecursive(2);
    countDownRecursive(1);
      countDownRecursive(0);
      return
    return
  return
return
*/

console.log('------------------');

const countDowner = (num) => {
  console.log(num);
  // decrement by one
  const updatedNum = num - 1;
  //base case
  if (updatedNum >= 0) {
    countDowner(updatedNum);
  }
};
countDowner(7);
