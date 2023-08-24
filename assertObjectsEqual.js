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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}✅`);
  } else {
    console.log(`❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}❌`);
  }
};


// Test cases for assertObjectsEqual
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
assertObjectsEqual(obj1, obj2); // Should pass

const obj3 = { a: 1, b: [2, 3] };
const obj4 = { a: 1, b: [2, 3] };
assertObjectsEqual(obj3, obj4); // Should pass

const obj5 = { x: 1, y: [2, 3] };
const obj6 = { x: 1, y: [3, 2] };
assertObjectsEqual(obj5, obj6); // Should fail

const obj7 = { p: 1, q: 2 };
const obj8 = { q: 2, p: 1, r: 3 };
assertObjectsEqual(obj7, obj8); // Should fail