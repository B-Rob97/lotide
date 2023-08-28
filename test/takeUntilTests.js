const takeUntil = require("../takeUntil");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

/////
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 2, 5, 7, 2];
const data4 = ["I've", "been", "to", "Hollywood"];

assertArraysEqual(data1, results1); // fail
assertArraysEqual(data2, results2); // fail
assertArraysEqual(data3, results1); // pass
assertArraysEqual(data4, results2); // pass