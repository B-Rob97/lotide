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

assertArraysEqual([1, 2, 3], [1, 2, 3]); //=> true
assertArraysEqual([1, 2, 3], [3, 2, 1]);  //=> false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);  //=> false
assertArraysEqual([], []); // => true