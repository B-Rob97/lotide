const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅Arrays Equal: ${array1} === ${array2}✅`);
  } else {
    console.log(`❌Arrays NOT Equal: ${array1} === ${array2}❌`);
  }
};

const without = function(source, itemsToRemove) {
  let modifiedList = [];
  for (let x = 0; x < source.length; x++) {
    if (!itemsToRemove.includes(source[x])) {
      modifiedList.push(source[x]);
    }
  }
  return modifiedList;
};
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