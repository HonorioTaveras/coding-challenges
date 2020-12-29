// Validate Subsequence
// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

// Sample Input:
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]

// Sample Output:
// true

/*
I: two arrays of numbers
O: boolean - represents whether second array is subsequence of first
C:
E: single num in an array and array itself are both valid subsequences
pseudocode:
 • declare a result array
 • declare i at 0
 • declare j at 0

 • while j is less than length of sequence
   • if array at idx i is equal to sequence at idx j
	   • push array at idx i into result
		 • increment j by one
		 • increment i by one
	 • else
	   • increment i by one

 • return if length of result  is equal to length of sequence
*/

// O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence(array, sequence) {
	let result = [];
	// let i = 0;
	let j = 0;

	if (sequence.length > array.length) {
		return false;
	}

	for (let i = 0; i < array.length; i += 1) {
		if (j === sequence.length) {
			break;
		}
		if (array[i] === sequence[j]) {
			result.push(array[i]);
			j += 1;
		}
	}

	return result.length === sequence.length;
}

// TEST CASES
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));  // T
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])); // T
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10])); // T
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6])); // T
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10])); // T
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 12])); // F
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [4, 5, 1, 22, 25, 6, -1, 8, 10])); // F
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 23, 6, -1, 8, 10])); // F
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10])); // F
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10])); // F
