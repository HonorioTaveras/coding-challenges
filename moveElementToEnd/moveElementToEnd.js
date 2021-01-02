// Move Element To End
// You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

// The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

// Sample Input
// array = [2, 1, 2, 2, 2, 3, 4, 2]
// toMove = 2
// Sample Output
// [1, 3, 4, 2, 2, 2, 2, 2] - the numbers 1, 3, and 4 could be ordered differently

/*
I: an array of nums | a number
O: a mutated array of nums with nums in array the match input num all pushed to end of array
E: function should perform this in place
C:
peudocode:
• declare var i starting at 0 (idx)
• declare var j starting at end of array
• while i is less than or equal to j
• if arr at i is equal to toMove AND arr at j is equal to toMove...
*/

// O(n) time | O(1) space - where n is the length of the array
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    if (array[i] === toMove && array[j] !== toMove) {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;

      i += 1;
      j -= 1;
    }
    if (array[i] !== toMove && array[j] === toMove) {
      i += 1;
      j -= 1;
    }
    if (array[i] !== toMove && array[j] !== toMove) {
      i += 1;
    }
    if (array[i] === toMove && array[j] === toMove) {
      j -= 1;
    }
  }
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)); // [ 4, 1, 3, 2, 2, 2, 2, 2 ]
console.log(moveElementToEnd([], 3)); // []
console.log(moveElementToEnd([1, 2, 4, 5, 6], 3)); // [ 1, 2, 4, 5, 6 ]
console.log(moveElementToEnd([3, 3, 3, 3, 3], 3)); // [ 3, 3, 3, 3, 3 ]
console.log(moveElementToEnd([3, 1, 2, 4, 5], 3)); // [ 5, 1, 2, 4, 3 ]
console.log(moveElementToEnd([1, 2, 4, 5, 3], 3)); // [ 1, 2, 4, 5, 3 ]
