// Write a function that takes in an n x m two-dimensional array (that can be square-shaped where n == m) and returns a one dimensional array of all the array's elements in spiral order.

// Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.

// Sample Input:
//   array = [
//     [1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7],
//   ]

//   Sample Output:
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// O(n) time | O(n) space

function spiralTraverse(array) {
  let result = [];

  let startRow = 0;
  let startCol = 0;
  let endRow = array.length - 1;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // right
    for (let col = startCol; col <= endCol; col += 1) {
      result.push(array[startRow][col]);
    }

    // down
    for (let row = startRow + 1; row <= endRow; row += 1) {
      result.push(array[row][endCol]);
    }

    // left
    for (let col = endCol - 1; col >= startCol; col -= 1) {
      if (startRow === endRow) {
        break;
      }
      result.push(array[endRow][col]);
    }

    // up
    for (let row = endRow - 1; row >= startRow + 1; row -= 1) {
      if (startCol === endCol) {
        break;
      }
      result.push(array[row][startCol]);
    }

    startRow += 1;
    startCol += 1;
    endRow -= 1;
    endCol -= 1;
  }

  return result;
}
