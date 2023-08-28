const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;