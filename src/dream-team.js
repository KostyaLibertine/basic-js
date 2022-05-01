const { interfaces } = require('mocha');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // const correctNames = Array.isArray(members) ? members.filter(e => typeof(e) === "string") : []
  // const deleteSpaces = correctNames.map(f => f.replaceAll(' ', ''))
  // const firstLetters = deleteSpaces.map(g => g.slice(0, 1))
  // const upperCase = firstLetters.map(h => h.toUpperCase())
  // upperCase.sort()
  // const string = upperCase.toString()
  // const withoutCommas = string.replaceAll(',', '')

  // if (correctNames.length === 0) {
  //   return false
  // }
  // else {
  //   return withoutCommas
  // }
}

module.exports = {
  createDreamTeam
};
