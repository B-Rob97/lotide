const middle = function(array) {
  let middleNumber = [];
  const middleIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return middleNumber;
  }

  if (array.length % 2 === 0) {
    middleNumber.push(array[middleIndex - 1]);
  }
  
  middleNumber.push(array[middleIndex]);

  return middleNumber;
};

module.exports = middle;
