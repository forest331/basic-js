const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const getDepth = (a) => {
      let maxChild = 0; // если ни один элемент не массив
      for (const item of a) {
        if (Array.isArray(item)) {
          maxChild = Math.max(maxChild, getDepth(item));
        }
      }
      return 1 + maxChild;
    };

    return getDepth(arr);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
