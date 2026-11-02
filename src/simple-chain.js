const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = (() => {
  let links = [];

  const obj = {
    getLength() {
      return links.length;
    },

    addLink(value) {
      links.push(value === undefined ? "" : String(value));
      return obj;
    },

    removeLink(position) {
      if (
        typeof position !== "number" ||
        !Number.isInteger(position) ||
        position < 1 ||
        position > links.length
      ) {
        links = [];
        throw new Error("You can't remove incorrect link!");
      }
      links.splice(position - 1, 1);
      return obj;
    },

    reverseChain() {
      links.reverse();
      return obj;
    },

    finishChain() {
      const result = links.map((link) => `( ${link} )`).join("~~");
      links = [];
      return result;
    },
  };

  return obj;
})();

module.exports = {
  chainMaker,
};
