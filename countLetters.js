const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}❌`);
  } else if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  }
};

const countLetters = function(letters) {
  let result = {};
  for (let letter of letters) {
    if (letter !== " ") {
      letter = letter.toLowerCase();
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

// Test cases
const result = countLetters("lighthouse in the house");

assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['o'], 2);
assertEqual(result['u'], 2);
assertEqual(result['s'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);

// Additional test cases
const emptyResult = countLetters("");
assertEqual(Object.keys(emptyResult).length, 0);

const spaceResult = countLetters("   ");
assertEqual(Object.keys(spaceResult).length, 0);

const mixedCaseResult = countLetters("AbCDEfg");
assertEqual(mixedCaseResult['a'], 1);
assertEqual(mixedCaseResult['b'], 1);
assertEqual(mixedCaseResult['c'], 1);
assertEqual(mixedCaseResult['d'], 1);
assertEqual(mixedCaseResult['e'], 1);
assertEqual(mixedCaseResult['f'], 1);
assertEqual(mixedCaseResult['g'], 1);