const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0
  const value = matrix[0].map((col, i) => matrix.map((row) => row[i]))

  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value[i].length; j++) {
      if (value[i][j] === 0) break
      sum += value[i][j]
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
