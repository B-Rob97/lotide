const countLetters = function(letters) {
  let result = {};
  for (let letter of letters) {
    if (letter !== " ") {
      letter = letter.toLowerCase();
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;
