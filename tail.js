const tail = function(array) {
  let arrayTail = [];
  arrayTail = array.slice(1);
  return arrayTail;
};

module.exports = tail;