// Binary Search
// Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1.

// If you're unfamiliar with Binary Search, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

// Sample Input
// array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
// target = 33

// Sample Output
// 3

// O(log(n)) time | O(1) space
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.round((start + end) / 2);
    if (target < array[mid]) {
      end = mid - 1;
    }
    if (target > array[mid]) {
      start = mid + 1;
    }
    if (target === array[mid]) {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)); // 3
console.log(binarySearch([1, 5, 23, 111], 11)); // -1
console.log(binarySearch([1, 5, 23, 111], 5)); // 1
console.log(binarySearch([1, 5, 23, 111], 35)); // -1
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 0)); // 0
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 1)); // 1
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 21)); // 2
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 45)); // 5
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 61)); // 6
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 71)); // 7
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 72)); // 8
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73)); // 9
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 70)); // -1
