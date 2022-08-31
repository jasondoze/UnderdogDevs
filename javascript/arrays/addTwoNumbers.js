/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

function addTwoNums(linkList1, linkList2) {
  // take each list, reverse it, and convert to numbers
  let num1 = linkList1.reverse().join("");
  let num2 = linkList2.reverse().join("");
  // add the numbers
  let sum = parseInt(num1) + parseInt(num2);
  // convert the sum to a string and reverse it
  let sumString = sum.toString().split("").reverse();
// iterate throught the string and parse out the numbers
  for (let i = 0; i < sumString.length; i++) {
    sumString[i] = parseInt(sumString[i]);
  }
  // return the sum as a linked list
  return sumString;
}

console.log(addTwoNums([2, 4, 3], [5, 6, 4]));
// output: [7, 0, 8]
