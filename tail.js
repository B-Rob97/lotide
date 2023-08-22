const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}❌`);
  } else if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  }
};

const tail = function(array) {
  let arrayTail = [];
  arrayTail = array.slice(1);
  return arrayTail;
};

// Test Cases
const testNumbers = [5, 10, 15, 20, 25];
console.log(tail([3, 2, 1])); // Number Test - Return [2, 1]
console.log(tail(["Hello", "World"])); // Word Test - Returns ['World']
console.log(tail(testNumbers)); // Array Test - Returns [ 10, 15, 20, 25 ]
console.log(testNumbers); // Original Test - Should remain unchanged
console.log(tail([])); // Empty Array test - Should return empty array
console.log(tail([1])); // Single element test - Should return empty array


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(testNumbers), testNumbers);