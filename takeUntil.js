const takeUntil = function(array, callback) {
  let result = [];
  for (let items of array) {
    if (callback(items)) {
      return result;
    }
    result.push(items);
  }
};

module.exports = takeUntil;