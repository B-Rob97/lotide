const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}❌`);
  } else if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  }
};

//    "Blue Hill": { stars: 1 } / x => x.stars === 2
const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// Testss

let results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(results1, "noma");

let results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3); // => "Akaleri"

assertEqual(results2, "Akaleri");


let results3 = findKey({
  "Apple": { color: "red" },
  "Banana": { color: "yellow" },
  "Orange": { color: "orange" },
}, x => x.color === "yellow");

assertEqual(results3, "Banana");

