const { NotImplementedError } = require("../lib");

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this._cipher(message, key, 1);
  }

  decrypt(message, key) {
    return this._cipher(message, key, -1);
  }

  _cipher(message, key, dir) {
    if (
      message === undefined ||
      message === null ||
      key === undefined ||
      key === null
    ) {
      throw new Error("Incorrect arguments!");
    }

    const msg = String(message).toUpperCase();
    const k = String(key).toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (const ch of msg) {
      const code = ch.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        const shift = k.charCodeAt(keyIndex % k.length) - 65;
        const newCode = ((((code - 65 + dir * shift) % 26) + 26) % 26) + 65;
        result += String.fromCharCode(newCode);
        keyIndex++;
      } else {
        result += ch;
      }
    }

    return this.isDirect ? result : [...result].reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
