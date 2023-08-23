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

const middle = function(array) {
  let middleNumber = [];
  const middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return middleNumber;
    // Check if even
  } else if (array.length % 2 === 0) {
    middleNumber.push(array[middleIndex - 1]);
  }
  middleNumber.push(array[middleIndex]);

  return middleNumber;
};

// Check Even Array
console.log(middle([1, 2, 3, 4])); // => [2, 3]
// Check Odd Array
console.log(middle([1, 2, 3])); // => [2]
// Check 1 Item Array
console.log(middle([1])); // => []
// Check 2 Item Array
console.log(middle([1, 2])); // => []
// Check Empty Array
console.log(middle([])); // => []

// Check Original Arrays unchanged
const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [1, 2, 3, 4];

assertArraysEqual(middle(testArray1), testArray1);
assertArraysEqual(middle(testArray2), testArray2);
