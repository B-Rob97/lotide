const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2)) {
    console.log(`✅Arrays Equal: ${array1} === ${array2}✅`);
  }
  
  if (!eqArrays(array1, array2)) {
    console.log(`❌Arrays NOT Equal: ${array1} !== ${array2}❌`);
  }
  
};

module.exports = assertArraysEqual;

