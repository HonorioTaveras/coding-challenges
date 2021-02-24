// Find Three Largest Numbers
// Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array.

// The function should return duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].

// Sample Input
// array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
// Sample Output
// [18, 141, 541]

function findThreeLargestNumbers(array) {
  for (let i = 0; i < array.length; i += 1) {
    shiftLargerNumber(array, i);
  }

  return [array[2], array[1], array[0]];
}

function shiftLargerNumber(array, idx) {
  if (array[idx] > array[idx + 1]) {
    return;
  }

  if (array[idx] < array[idx + 1]) {
    let temp = array[idx];
    array[idx] = array[idx + 1];
    array[idx + 1] = temp;
    shiftLargerNumber(array, idx - 1);
  }
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
); // [ 18, 141, 541 ]
console.log(findThreeLargestNumbers([55, 7, 8])); // [ 7, 8, 55 ]
console.log(findThreeLargestNumbers([55, 43, 11, 3, -3, 10])); // [ 11, 43, 55 ]
console.log(findThreeLargestNumbers([7, 8, 3, 11, 43, 55])); // [ 11, 43, 55 ]
console.log(findThreeLargestNumbers([55, 7, 8, 3, 43, 11])); // [ 11, 43, 55 ]
console.log(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7])); // [ 7, 7, 7 ]
console.log(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7])); // [ 7, 7, 8 ]
console.log(
  findThreeLargestNumbers([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7])
); // [ -2, -1, 7 ]
