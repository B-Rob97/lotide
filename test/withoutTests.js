const without = require("../without");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

// Basic Test
console.log(without([1, 2, 3], [1])); // => [2, 3]
// Type Test
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
// Test if original string is modified
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // => ['hello', 'world']
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => ✅Arrays Equal: hello,world,lighthouse === hello,world,lighthouse✅
// Empty Array Test
console.log(without([], [1])); // => []
console.log(without([1, 2, 3], [])); // => [1, 2, 3]
// CAPS Test
//const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["Lighthouse"])); // => [ 'hello', 'world','lighthouse' ]