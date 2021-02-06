// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

var numIdenticalPairs = function (nums) {
  let goodPairs = 0;
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    while (j > i) {
      if (nums[i] === nums[j]) {
        goodPairs += 1;
      }
      j -= 1;
    }
    i += 1;
    j = nums.length - 1;
  }

  return goodPairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0
