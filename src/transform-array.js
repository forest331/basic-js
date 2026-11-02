const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const CONTROLS = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];

  const n = arr.length;
  const deleted = new Array(n).fill(false);
  const doubled = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const cmd = arr[i];

    if (cmd === "--discard-next") {
      const t = i + 1;
      if (t < n && !deleted[t]) {
        if (doubled[t] > 0) doubled[t]--;
        else deleted[t] = true;
      }
    } else if (cmd === "--discard-prev") {
      const t = i - 1;
      if (t >= 0 && !deleted[t]) {
        if (doubled[t] > 0) doubled[t]--;
        else deleted[t] = true;
      }
    } else if (cmd === "--double-next") {
      const t = i + 1;
      if (t < n && !deleted[t]) doubled[t]++;
    } else if (cmd === "--double-prev") {
      const t = i - 1;
      if (t >= 0 && !deleted[t]) doubled[t]++;
    }
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (CONTROLS.includes(arr[i])) continue;
    if (deleted[i]) continue;
    for (let k = 0; k <= doubled[i]; k++) {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform,
};
