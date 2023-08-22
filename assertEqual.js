const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌⛔❌Assertion Failed: ${actual} !== ${expected}❌⛔❌`);
  } else if (actual === expected) {
    console.log(`✅😁✅Assertion Passed: ${actual} === ${expected}✅😁✅`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, 'Five');
assertEqual(100, 100);
assertEqual("Brett", "Brett");
assertEqual("Brett", "Bret");
assertEqual(5, 5);