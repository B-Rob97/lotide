const countLetters = function(letters) {
  let result = {};
  for (let letter of letters) {
    if (letter === " ") {
      continue;
    }
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  return result;
};

module.exports = countLetters;
