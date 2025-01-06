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
  let common = 0;
  let str1 = s1;
  let str2 = s2;
  for (let i = 0; i < str1.length; i += 1) {
    let char1 = str1[i];
    for (let j = 0; j < str2.length; j += 1) {
      let char2 = str2[j];
      if (char1 === char2) {
        common += 1;
        str2 = str2.replace(char2, "");
        break;
      }
    }
  }
  return common;
}

module.exports = {
  getCommonCharacterCount,
};
