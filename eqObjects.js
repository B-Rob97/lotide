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

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}❌`);
  } else if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (Array.isArray(object1[key]) || Array.isArray(object1[key])) {
      eqArrays(object1[key], object2[key])
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
  
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

// Array Tests
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false)

// GPT Tests cause my brain hurts
const differentValueSameKey = { color: "blue", size: "medium" };
assertEqual(eqObjects(shirtObject, differentValueSameKey), false);

const extraKeyObject = { color: "red", size: "medium", material: "cotton" };
assertEqual(eqObjects(shirtObject, extraKeyObject), false);

const emptyObjects = {};
assertEqual(eqObjects({}, {}), true);

const differentKeysObject = { style: "polo", size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, differentKeysObject), false);

const nestedObject1 = { color: "red", size: "medium", details: { material: "cotton" } };

const nestedObjectMismatch = { color: "red", size: "medium", details: { material: "polyester" } };
assertEqual(eqObjects(nestedObject1, nestedObjectMismatch), false); 
