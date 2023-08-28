const without = function(source, itemsToRemove) {
  let modifiedList = [];
  for (let x = 0; x < source.length; x++) {
    if (!itemsToRemove.includes(source[x])) {
      modifiedList.push(source[x]);
    }
  }
  return modifiedList;
};

module.exports = without;