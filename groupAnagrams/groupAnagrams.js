// Group Anagrams
// Write a function that takes in an array of strings and groups anagrams together.

// Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.

// Your function should return a list of anagram groups in no particular order.

// Sample Input
// words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
// Sample Output
// [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

function groupAnagrams(words) {
  let hashTable = {};

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const sortedWord = sortWords(word);
    if (!(sortedWord in hashTable)) {
      hashTable[sortedWord] = [words[i]];
    } else {
      hashTable[sortedWord].push(words[i]);
    }
  }

  return Object.values(hashTable);
}

function sortWords(str) {
  let letters = str.split('');
  let sortedLetters = letters.sort();
  return sortedLetters.join('');
}

console.log(
  groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'])
); // [ [ 'yo', 'oy' ], [ 'act', 'tac', 'cat' ], [ 'flop', 'olfp' ], [ 'foo' ] ]
console.log(groupAnagrams([])); // []
console.log(groupAnagrams(['test'])); // [ [ 'test' ] ]
console.log(groupAnagrams(['abc', 'dabd', 'bca', 'cab', 'ddba'])); // [ [ 'abc', 'bca', 'cab' ], [ 'dabd', 'ddba' ] ]
console.log(groupAnagrams(['abc', 'cba', 'bca'])); // [ [ 'abc', 'cba', 'bca' ] ]
console.log(groupAnagrams(['zxc', 'asd', 'weq', 'sda', 'qwe', 'xcz'])); // [ [ 'zxc', 'xcz' ], [ 'asd', 'sda' ], [ 'weq', 'qwe' ] ]
