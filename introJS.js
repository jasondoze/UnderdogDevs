//   Use the .map() method to take the bills array below and create a second array
//   of numbers called totals. The totals array should contains each amount from the
//   bills array but with a 15% tip added. Log the totals array to the console.
//
//   For example, the first two entries in the totals array would be:
//
//   [57.76, 21.99, ... ]
//
//   Things to note:
//    - each entry in the totals array must be a number
//    - each number must have an accuracy of two decimal points

//   QUIZ REQUIREMENTS
//   - Your code should have the variables `bills` and `totals`
//   - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
//   - Your `totals` array should be an array of numbers
//   - Your code should print the `totals` array to the console
//   - The output must be as described above.

var bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
  100.1, 6.77, 2.22,
];

var totals = bills.map(function (num) {
  num = num * 0.15 + num;
  return Number(num.toFixed(2));
});
console.log(totals);

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100],
];

//    - Use a nested `for` loop to cycle through `numbers`.
//    - Convert each even number to the string "even"
//    - Convert each odd number to the string "odd"

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  // add a printAccountSummary() method that returns the following account message:
  // Welcome!
  // Your balance is currently $1000 and your interest rate is 1%.
  printAccountSummary: function () {
    return (
      "Welcome!\nYour balance is currently $" +
      savingsAccount.balance +
      " and your interest rate is " +
      savingsAccount.interestRatePercent +
      "%."
    );
  },
};

console.log(savingsAccount.withdraw(50));

//  Your code should have an object `facebookProfile`
//  The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
//  Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
//  Carefully implement the desired functionality of each method, as decribed above
// TIP
// In an array,
//  addition at the end is done using push() method
//  addition at a specific index is done using splice() method
//  deletion from the beginning is done using pop() method
//  deletion from a specific index is done using splice() method

let facebookProfile = {
  name: "Goober",
  friends: 20,
  messages: ["Hello", "How are you?", "I'm good"],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends += 1;
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0) {
      facebookProfile.friends -= 1;
    }
  },
};
console.log(facebookProfile.messages);

//   Your code sshould have an array named `donuts`
//   Your `donuts` array should call the `forEach()` method
//   Your `forEach()` loop should output the donut summaries
//   BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.

// This is an array of objects.
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 },
];

donuts.forEach(function (donut) {
  console.log(donut.type + " donuts cost $" + donut.cost + " each");
});
