const map = require("../map");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

const words = ["ground", "control", "to", "major", "tom"];
const tester = function(word) {
  return word + "s";
};


const results1 = map(words, word => word[0]);
const results2 = map(words, word => typeof word);
const results3 = map(words, word => word);
const results4 = map(words, tester);



console.log("Returns: [ 'g', 'c', 't', 'm', 't' ]", results1);
console.log("Returns: [ 'string', 'string', 'string', 'string', 'string' ]", results2);
console.log("Returns: [ 'ground', 'control', 'to', 'major', 'tom' ]", results3);
console.log("Returns: [ 'grounds', 'controls', 'tos', 'majors', 'toms' ]", results4);


assertArraysEqual(words, results1); // Should fail
assertArraysEqual(words, results2); // Should fail
assertArraysEqual(words, results3); // Should pass

// uses a callback function that makes every word plural
assertArraysEqual(words, results4); // Should fail