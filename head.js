const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}❌`);
  } else if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  }
};

const head = function(array) {
  return array[0];
};

// Test Cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([1, 2, 3]));
console.log(head([1]));
console.log(head([]));