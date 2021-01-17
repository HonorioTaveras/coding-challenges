// Three Number Sum
// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

// If no three numbers sum up to the target sum, the function should return an empty array.

// Sample Input
// array = [12, 3, 1, 2, -6, 5, -8, 6]
//targetSum = 0
// Sample Output
// [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

// O(n) time | O(n) space - where n is the length of the input array
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  let result = [];
  let i = 0;
  let j = 1;
  let k = array.length - 1;

  while (i < array.length - 2) {
    const currentSum = array[i] + array[j] + array[k];

    if (currentSum === targetSum) {
      result.push([array[i], array[j], array[k]]);
      j += 1;
      k -= 1;
    }

    if (currentSum < targetSum) {
      j += 1;
    }

    if (currentSum > targetSum) {
      k -= 1;
    }

    if (j >= k) {
      i += 1;
      j = i + 1;
      k = array.length - 1;
    }
  }

  return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); // [ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]
console.log(threeNumberSum([1, 2, 3], 6)); // [ [ 1, 2, 3 ] ]
console.log(threeNumberSum([1, 2, 3], 7)); // []
console.log(threeNumberSum([8, 10, -2, 49, 14], 57)); // [ [ -2, 10, 49 ] ]
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0)); // [ [ -8, 3, 5 ], [ -6, 1, 5 ], [ -1, 0, 1 ] ]
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0)); // [ [-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-1, 0, 1] ]
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0));
/*
[
  [-8, 2, 6],
  [-8, 3, 5],
  [-6, 0, 6],
  [-6, 1, 5],
  [-5, -1, 6],
  [-5, 0, 5],
  [-5, 2, 3],
  [-1, 0, 1]
]
*/
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
/*
[
  [1, 2, 15],
  [1, 8, 9],
  [2, 7, 9],
  [3, 6, 9],
  [3, 7, 8],
  [4, 5, 9],
  [4, 6, 8],
  [5, 6, 7]
]
*/
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 32)); // [ [8, 9, 15] ]
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 33)); // []
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 5)); // []
