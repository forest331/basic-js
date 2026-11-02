const { NotImplementedError } = require("../lib");

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
  if (!Array.isArray(members)) return false;

  const initials = members
    .filter((name) => typeof name === "string")
    .map((name) => name.trim()[0])
    .filter((ch) => ch !== undefined)
    .map((ch) => ch.toUpperCase());

  return initials.sort().join("");
}

module.exports = {
  createDreamTeam,
};
