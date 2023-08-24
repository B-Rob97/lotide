const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅Arrays Equal: ${array1} === ${array2}✅`);
  } else {
    console.log(`❌Arrays NOT Equal: ${array1} === ${array2}❌`);
  }
};

const takeUntil = function(array, callback) {
  let result = [];
  for (let items of array) {
    if (callback(items)) {
      return result;
    }
    result.push(items);
  }
};

// Tests

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 2, 5, 7, 2];
const data4 = ["I've", "been", "to", "Hollywood"];

assertArraysEqual(data1, results1); // fail
assertArraysEqual(data2, results2); // fail
assertArraysEqual(data3, results1); // pass
assertArraysEqual(data4, results2); // pass