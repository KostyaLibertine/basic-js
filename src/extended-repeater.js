const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let {
    repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'
  } = options
  if (addition !== undefined) addition = String(addition)

  const result = []

  function additionSeparatorFunc() {
    let additions = []
    for (let i = 0; i < additionRepeatTimes; i++) {
      additions.push(addition)
    }
    return additions.join(additionSeparator)
  }

  for (let i = 0; i < repeatTimes; i++) {
    let e = `${str}${additionSeparatorFunc()}`
    result.push(e)
  }

  return result.join(separator)
}

module.exports = {
  repeater
};
