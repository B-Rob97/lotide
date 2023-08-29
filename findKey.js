const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {
    const items = object[key];
    const value = callback(items);
    if (value) {
      return key;
    }
  }
};

module.exports = findKey;