const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof key !== 'string' || typeof message !== 'string') {
      throw new Error ('Incorrect arguments!')
    }

    let sub = message.split('').map(item => item.toUpperCase()).filter(item => this.alphabet.includes(item)).join('')
    key = key.split('').map(item => item.toUpperCase()).join('')
    let tempResult = []
    let result = []

    for (let i = 0; i < sub.length; i++) {
      let mark
      let markKey
      let markLetter
      let messageLetter = sub[i]
      let keyLetter

      markLetter = this.alphabet.indexOf(messageLetter)
      keyLetter = key[i % key.length]
      markKey = this.alphabet.indexOf(keyLetter)
      mark = (markLetter + markKey) % this.alphabet.length
      tempResult.push(this.alphabet[mark])
    }
    tempResult = tempResult.reverse()
    
    for (let item of message) {
      if (this.alphabet.includes(item.toUpperCase())) result.push(tempResult.pop())
      else result.push(item)
    }
    
    if (!this.direct) result = result.reverse()
    
    return result.join('')
  }

  decrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof key !== 'string' || typeof message !== 'string') {
        throw new Error ('Incorrect arguments!')
    }

    let sub = message.split('').map(item => item.toUpperCase()).filter(item => this.alphabet.includes(item)).join('')
    key = key.split('').map(item => item.toUpperCase()).join('')
    let tempResult = []
    let result = []

    for (let i = 0; i < sub.length; i++) {
      let mark
      let markKey
      let markLetter
      let messageLetter = sub[i]
      let keyLetter

      markLetter = this.alphabet.indexOf(messageLetter)
      keyLetter = key[i % key.length]
      markKey = this.alphabet.indexOf(keyLetter)
      mark = (this.alphabet.length + markLetter - markKey) % this.alphabet.length
      tempResult.push(this.alphabet[mark])
    }
    tempResult = tempResult.reverse()

    for (let item of message) {
      if (this.alphabet.includes(item.toUpperCase())) result.push(tempResult.pop())
      else result.push(item)
    }
    
    if (!this.direct) result = result.reverse()
    
    return result.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};