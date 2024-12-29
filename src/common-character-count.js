const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Set = new Set(s1.split(""));
  const s2Set = new Set(s2.split(""));
  const biggestString = s1Set.size > s1Set.size ? [...s1Set] : [...s2Set];
  const s1Obj = {};
  const s2Obj = {};
  s1Set.forEach(char => (s1Obj[char] = s1.split("").filter(v => v == char)));
  s2Set.forEach(char => (s2Obj[char] = s2.split("").filter(v => v == char)));

  return biggestString.reduce((acc, v) => {
    const s1Count = s1Obj[v] ? s1Obj[v].length : 0;
    const s2Count = s2Obj[v] ? s2Obj[v].length : 0;
    return acc + Math.min(s1Count, s2Count);
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
