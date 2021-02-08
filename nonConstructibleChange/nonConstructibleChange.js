// Non-Constructible Change
// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

// For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

// Sample Input
// coins = [5, 7, 1, 1, 2, 3, 22]
// Sample Output
// 20

// O(nLog(n)) time | O(1) space - where n is the length of the input array
function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let minimumChange = 0;

  for (const coin of coins) {
    let currentMin = minimumChange + 1;

    if (coin > currentMin) {
      return currentMin;
    }

    if (coin <= currentMin) {
      minimumChange += coin;
    }
  }

  return minimumChange + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(nonConstructibleChange([1, 1, 1, 1, 1])); // 6
console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55
console.log(nonConstructibleChange([6, 4, 5, 1, 1, 8, 9])); // 3
console.log(nonConstructibleChange([])); // 1
console.log(nonConstructibleChange([87])); // 1
