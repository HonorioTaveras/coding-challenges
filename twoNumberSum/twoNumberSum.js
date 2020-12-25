// Two Number Sum

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Sample Input
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

// Sample Output
// [-1, 11] // the numbers could be in reverse order

/*
I: array of distinct numbers, and a number representing a targetSum
O: array of the two numbers that sum up to target
C:
E: if no two nums sum up to target, return an empty array
pseudocode:
• create a result array (empty)
• create a hashTable to track differences
• iterate over input array
  • create a difference variable representing targetSum minus current ele
	• if current ele is not in hashTable
	  • set key of hashTable to be the difference with a value of 1
	• else
	  • push current ele and difference into result array

• return result array

*/

// 0(n) time | O(n) space - where n is the length of the input array
function twoNumberSum(array, targetSum) {
  let result = [];
  let hashTable = {};

  for (const ele of array) {
    let difference = targetSum - ele;
    if (ele in hashTable) {
      result.push(ele, difference);
    } else {
      hashTable[difference] = 1;
    }
  }

  return result;
}

// TEST CASES

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); //  [ -1, 11 ]
console.log(twoNumberSum([4, 6], 10)); // [ 6, 4 ]
console.log(twoNumberSum([4, 6, 1], 5)); // [ 1, 4 ]
console.log(twoNumberSum([4, 6, 1, -3], 3)); // [ -3, 6 ]
console.log(twoNumberSum([4, 6, 1, -3], 3)); // [ -3, 6 ]
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)); // [ 9, 8 ]
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)); // [ 15, 3 ]
console.log(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)); // [ 0, -5 ]
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)); // [ -47, 210 ]
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)); // []
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)); // []
console.log(twoNumberSum([14], 15)); // []
console.log(twoNumberSum([15], 15)); // []
