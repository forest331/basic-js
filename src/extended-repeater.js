const { NotImplementedError } = require("../lib");

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

function repeater(str, options = {}) {
  const opts = options || {};

  const s = String(str);
  const repeatTimes = opts.repeatTimes !== undefined ? opts.repeatTimes : 1;
  const separator = opts.separator !== undefined ? opts.separator : "+";

  const additionRepeatTimes =
    opts.additionRepeatTimes !== undefined ? opts.additionRepeatTimes : 1;
  const additionSeparator =
    opts.additionSeparator !== undefined ? opts.additionSeparator : "|";

  let additionPart = "";
  if (opts.addition !== undefined) {
    const add = String(opts.addition);
    additionPart = new Array(additionRepeatTimes)
      .fill(add)
      .join(additionSeparator);
  }

  const unit = s + additionPart;
  return new Array(repeatTimes).fill(unit).join(separator);
}

module.exports = {
  repeater,
};
