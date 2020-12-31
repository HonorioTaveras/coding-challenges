// Smallest Difference
// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

// Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest difference.

// Sample Input
// arrayOne = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 17]
// Sample Output
// [28, 26]

/*
I: two arrays of numbers
O: an array of numbers
C:
E:
pseudocode:
*/

// O(nlog(n) + mlog(m)) time | O(1) space - where n is the length of the first input array and m is the length of the second input array
function smallestDifference(arrayOne, arrayTwo) {
  let result = [];
  let runningSmallestDifference = Infinity;

  let sortedArrOne = arrayOne.sort((a, b) => a - b);
  let sortedArrTwo = arrayTwo.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < sortedArrOne.length && j < sortedArrTwo.length) {
    const currentArrOneEle = sortedArrOne[i];
    const currentArrTwoEle = sortedArrTwo[j];
    const currentDifference = Math.abs(currentArrOneEle - currentArrTwoEle);
    if (currentDifference < runningSmallestDifference) {
      runningSmallestDifference = currentDifference;
      result = [currentArrOneEle, currentArrTwoEle];
      currentArrOneEle < currentArrTwoEle ? (i += 1) : (j += 1);
    } else {
      currentArrOneEle < currentArrTwoEle ? (i += 1) : (j += 1);
    }
  }

  return result;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])); // [ 28, 26 ]
console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])); // [ 20, 17 ]
console.log(
  smallestDifference([10, 0, 20, 25], [1005, 1006, 1014, 1032, 1031])
); // [ 25, 1005 ]
console.log(
  smallestDifference([10, 0, 20, 25, 2200], [1005, 1006, 1014, 1032, 1031])
); // [ 25, 1005 ]
console.log(
  smallestDifference([10, 0, 20, 25, 2000], [1005, 1006, 1014, 1032, 1031])
); // [ 2000, 1032 ]
