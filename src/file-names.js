const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let add = 1;
  for (i = 0; i < names.length - 1; i++) {
     for (k = i + 1; k < names.length; k++) {
       if (names[i] === names[k]) {
         names[k] += `(${add++})`
       }
     }
     add = 1
  }
  return names  
}

module.exports = {
  renameFiles
};
