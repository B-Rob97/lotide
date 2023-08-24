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


const words = ["ground", "control", "to", "major", "tom"];
const tester = function(word) {
  return word + "s";
};

//                     words/tester
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => typeof word);
const results3 = map(words, word => word);
const results4 = map(words, tester);



console.log(results1);
console.log(results2);
console.log(results3);
console.log(results4);


assertArraysEqual(words, results1); // Should fail
assertArraysEqual(words, results2); // Should fail
assertArraysEqual(words, results3); // Should pass

// uses a callback function that makes every word plural
assertArraysEqual(words, results4); // Should fail
