const countLetters = require("../countLetters");
const assertEqual = require("../assertEqual");



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
assertEqual(mixedCaseResult['A'], 1);
assertEqual(mixedCaseResult['b'], 1);
assertEqual(mixedCaseResult['c'], 1);
assertEqual(mixedCaseResult['d'], 1);
assertEqual(mixedCaseResult['e'], 1);
assertEqual(mixedCaseResult['f'], 1);
assertEqual(mixedCaseResult['g'], 1);