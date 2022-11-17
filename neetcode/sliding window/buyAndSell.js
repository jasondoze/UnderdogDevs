/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Two Pointer
L = buy
R = sell
*/

const maxProfit = (prices) => {
  // set up variables to track the max profit we have seen
  // left pointer initialized to day 0
  let left = 0;
  // right pointer initialized to day 1 bc we cant buy sell on the same day
  let right = 1;
  let max = 0;
  // Increment the right pointer until we hit the end of the prices array
  while (right < prices.length) {
    console.log(left, right, max);
    // The profit on any given day is the difference between the sell date (represented by right pointer)
    // and buy date (represented by the left pointer)
    const profit = prices[right] - prices[left];
    // If we can get a profit higher than we've seen before, set it as our maximum,
    // and we'll keep going.
    if (profit > max) {
      max = profit;
    }
    // If today would be a loss, it means two things:
    // 1. We don't have a new maximum.
    // 2. We just found a day on which we could buy at a lower price than before, so we should buy now.
    // The implication of point two is that we move our left pointer (again, as a sliding window) to be the current day,
    // as represented by the right pointer.
    if (profit < 0) {
      left = right;
    }
    // Increment the right pointer to keep searching.
    right++;
  }
  // This will return 0 if we had no possible profit, since we initialized at 0,
  // or the maximum profit possible.
  return max;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
