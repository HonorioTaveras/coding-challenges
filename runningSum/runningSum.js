// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

// O(n) time | O(n) space - where n is the length of the input array
var runningSum = function (nums) {
  let result = new Array(nums.length).fill(nums[0]);

  for (let i = 1; i < nums.length; i += 1) {
    result[i] = result[i - 1] + nums[i];
  }

  return result;
};

console.log(runningSum([1, 2, 3, 4])); // [ 1, 3, 6, 10 ]
console.log(runningSum([1, 1, 1, 1, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(runningSum([1, 3, 5, 7])); // [ 1, 4, 9, 16 ]
console.log(runningSum([2, 4, 6, 8])); // [ 2, 6, 12, 20 ]
console.log(runningSum([1, 2, 3, 4, -1, -2, -3, -4])); // [ 1, 3, 6, 10, 9, 7, 4,  0 ]
