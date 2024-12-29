const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nString = n.toString();

  let maxNumber = null;

  for (let i = 0; i < nString.length; i++) {
    const modifiedNumber = Number(nString.slice(0, i) + nString.slice(i + 1));
    maxNumber = Math.max(maxNumber, modifiedNumber);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit,
};
