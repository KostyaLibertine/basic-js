const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let max = 0
  for (let i = 0; i < String(n).length; i++) {
    let num = String(n).split('')
    num[i] = ''
    num = num.join('')
    num = +num
    if (num > max) max = num
  }
  return max
}

module.exports = {
  deleteDigit
};
