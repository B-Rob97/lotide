const letterPositions = require("../letterPositions");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

// Tests
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);

// Empty Test
const emptyResult = letterPositions("");
console.log(emptyResult);  // Should print an empty object

const spaceResult = letterPositions("   ");
console.log(spaceResult);  // Should print an empty object

// Mixed Test
const mixedCaseResult = letterPositions("Hello");
assertArraysEqual(mixedCaseResult.H, [0]);
assertArraysEqual(mixedCaseResult.e, [1]);
assertArraysEqual(mixedCaseResult.l, [2, 3]);
assertArraysEqual(mixedCaseResult.o, [4]);