const assertObjectsEqual = require("../assertObjectsEqual");
const eqArrays = require('./eqArrays');

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