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

const letterPositions = function(sentence) {
  const results = {};
  for (let x = 0; x < sentence.length; x++) {
    const letter = sentence[x];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(x);
      } else {
        results[letter] = [x];
      }
    }
  }
  console.log(results);
  return results;
};

// Tests

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