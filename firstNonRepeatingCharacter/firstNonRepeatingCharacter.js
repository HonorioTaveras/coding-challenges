// First Non-Repeating Character
// Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

// The first non-repeating character is the first character in a string that occurs only once.

// If the input string doesn't have any non-repeating characters, your function should return -1.

// Sample Input
// string = "abcdcaf"
// Sample Output
// 1 // The first non-repeating character is "b" and is found at index 1.

// O(n) time | O(1) space
function firstNonRepeatingCharacter(string) {
  let tracker = {};

  for (let char of string) {
    tracker[char] = (tracker[char] || 0) + 1;
  }

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] in tracker && tracker[string[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstNonRepeatingCharacter('abcdcaf')); // 1
console.log(firstNonRepeatingCharacter('faadabcbbebdf')); // 6
console.log(firstNonRepeatingCharacter('a')); // 0
console.log(firstNonRepeatingCharacter('ab')); // 0
console.log(firstNonRepeatingCharacter('abc')); // 0
console.log(firstNonRepeatingCharacter('abac')); // 1
console.log(firstNonRepeatingCharacter('ababac')); //5
console.log(firstNonRepeatingCharacter('ababacc')); //-1
