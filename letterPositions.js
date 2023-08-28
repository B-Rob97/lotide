const letterPositions = function(sentence) {
  const results = {};
  for (let x = 0; x < sentence.length; x++) {
    const letter = sentence[x];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(x);
      } else {
        results[letter] = [x];
      }
    }
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;