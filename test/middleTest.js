const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

console.log("Return: [2, 3]", middle([1, 2, 3, 4]));
console.log("Return: [2]", middle([1, 2, 3]));
console.log("Return: []", middle([1]));
console.log("Return: []", middle([1, 2]));
console.log("Return: []", middle([]));

// Check Original Arrays unchanged

const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [1, 2, 3, 4];
assertArraysEqual(middle(testArray1), testArray1);
assertArraysEqual(middle(testArray2), testArray2);