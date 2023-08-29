# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@b-rob97/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

## Legend

* [`head(arr)`](#headarr): Returns the first item from an array.
* [`tail(arr)`](#tailarr): Returns all items from an array except the first item.
* [`middle(arr)`](#middlearr): Returns the middle item(s) from an array.
* [`without(source, itemsToRemove)`](#withoutsource-itemstoremove): Returns a new array with specified items removed.
* [`takeUntil(array, callback)`](#takeuntilarray-callback): Returns a slice of an array until a callback condition is met.
* [`map(array, callback)`](#maparray-callback): Creates a new array by applying a callback function to each item.
* [`letterPositions(sentence)`](#letterpositionssentence): Returns indices of letters in a sentence.
* [`findKeyByValue(object, value)`](#findkeybyvalueobject-value): Finds a key in an object by its corresponding value.
* [`findKey(object, callback)`](#findkeyobject-callback): Finds a key in an object based on a callback condition.
* [`eqObjects(object1, object2)`](#eqobjectsobject1-object2): Compares two objects for deep equality.
* [`eqArrays(array1, array2)`](#eqarraysarray1-array2): Compares two arrays for equality.
* [`countOnly(allItems, itemsToCount)`](#countonlyallitems-itemstocount): Counts occurrences of specified items in an array.
* [`countLetters(letters)`](#countlettersletters): Counts occurrences of letters in an array.
* [`assertObjectsEqual(actual, expected)`](#assertobjectsequalactual-expected): Compares and asserts deep equality of objects.
* [`assertEqual(actual, expected)`](#assertequalactual-expected): Compares and asserts equality of values.
* [`assertArraysEqual(array1, array2)`](#assertarraysequalarray1-array2): Compares and asserts equality of arrays.


## `head(arr)`: 
* The head function returns the first item from an array.
  * The head function will not return the first element as an array.
  * An array with only one element will yield one element as its head.
  * An empty array will yield `undefined` as its head.

### Example
```javascript
head(['Hello', 'Lighthouse', 'Labs']) // Returns 'Hello'
 ```

## `tail(arr)`:
* The tail function returns all items from an array except the first item.
  * The tail function will not return the tail elements as a new array.
  * An array with only one element will yield an empty array as its tail.
  * An empty array will yield an empty array as its tail.

#### Example
```javascript

tail(['Hello', 'Lighthouse', 'Labs']) // Returns ['Lighthouse', 'Labs']
```

## `middle(arr)`:
* The middle function returns the middle item(s) from an array.
  * If the array has an even number of elements, the middle will be the two middle items.
  * An array with less than three elements will yield an empty array as its middle.
  * An empty array will yield an empty array as its middle.

#### Example
```javascript
middle([1, 2, 3, 4, 5]) // Returns [3]
middle(['a', 'b', 'c', 'd']) // Returns ['b', 'c']
```
## `without(source, itemsToRemove)`:
* The without function returns a new array with all the items from the source array except the ones specified in the itemsToRemove array.
  * The original source array remains unchanged.
  * If an item appears multiple times in the itemsToRemove array, it will be removed from the source array each time.
  * If an item to remove is not present in the source array, it is ignored.
  * An empty source array will yield an empty array.

#### Example
```javascript
without([1, 2, 3, 4, 5], [3, 4]) // Returns [1, 2, 5]
without(['a', 'b', 'c', 'd'], ['b', 'd']) // Returns ['a', 'c']
```

## `takeUntil(array, callback)`:
* The takeUntil function returns a slice of the array with items taken from the beginning until the callback returns a truthy value.
  * The original array remains unchanged.
  * The callback is applied to each item in the array in order.
  * The items are taken from the beginning until the first item for which the callback returns true.
  * If no items satisfy the condition, an empty array is returned.

#### Example
```javascript
// Example 1: Taking elements until a condition is met
takeUntil(/* Array of numbers */, /* Callback function */) // Returns /* Resulting array */

// Example 2: Taking elements until another condition is met
takeUntil(/* Array of characters */, /* Callback function */) // Returns /* Resulting array */
```
## `map(array, callback)`:
* The map function creates a new array containing the results of applying the provided callback function to each item in the input array.
  * The original array remains unchanged.
  * The callback function is applied to each item in the array, in order.
  * The results of the callback function are collected into a new array, which is returned as the result.
  * The new array will have the same length as the input array.

#### Example
```javascript
// Example 1: Applying a transformation to each number
map(/* Array of numbers */, /* Callback function */) // Returns /* Resulting array */

// Example 2: Applying a transformation to each string
map(/* Array of strings */, /* Callback function */) // Returns /* Resulting array */
```
## `letterPositions(sentence)`:
* The letterPositions function returns an object where each key represents a letter in the sentence and the corresponding value is an array of the indices where that letter appears.
  * The spaces in the sentence are ignored.
  * The returned object contains arrays of indices for each letter.
  * The order of the indices reflects the order in which the letters appear in the sentence.

#### Example
```javascript
// Example 1: Finding indices of letters in a sentence
letterPositions(/* Sentence */) // Returns /* Object with letter indices */

// Example 2: Finding indices of letters in another sentence
letterPositions(/* Sentence */) // Returns /* Object with letter indices */
```
## `findKeyByValue(object, value)`:
* The findKeyByValue function searches for a key in the given object that corresponds to the specified value.
  * The function returns the first key found that matches the value, or `undefined` if no such key is found.
  * The search is performed by comparing the values associated with each key in the object.

#### Example
```javascript
// Example 1: Finding a key by its corresponding value
findKeyByValue(/* Object */, /* Value */) // Returns /* Key */

// Example 2: Finding another key by its corresponding value
findKeyByValue(/* Object */, /* Value */) // Returns /* Key */
```
## `findKey(object, callback)`:
* The findKey function searches for a key in the given object that satisfies the condition specified by the callback function.
  * The function returns the first key found that meets the callback's condition, or `undefined` if no such key is found.
  * The search is performed by applying the callback to the values associated with each key in the object.

#### Example
```javascript
// Example 1: Finding a key based on a condition
findKey(/* Object */, /* Callback function */) // Returns /* Key */

// Example 2: Finding another key based on a different condition
findKey(/* Object */, /* Callback function */) // Returns /* Key */
```
## `eqObjects(object1, object2)`:
* The eqObjects function compares two objects for deep equality.
  * The function returns `true` if both objects are equal in structure and values, or `false` otherwise.
  * The comparison includes nested objects and arrays.
  * If any value within the objects is an array, the `eqArrays` function is used to compare them.

#### Example
```javascript
// Example 1: Comparing two equal objects
eqObjects(/* Object 1 */, /* Object 2 */) // Returns true

// Example 2: Comparing two different objects
eqObjects(/* Object 1 */, /* Object 2 */) // Returns false
```
## `eqArrays(array1, array2)`:
* The eqArrays function compares two arrays for equality.
  * The function returns `true` if both arrays have the same length and contain the same elements in the same order, or `false` otherwise.

#### Example
```javascript
// Example 1: Comparing two equal arrays
eqArrays(/* Array 1 */, /* Array 2 */) // Returns true

// Example 2: Comparing two different arrays
eqArrays(/* Array 1 */, /* Array 2 */) // Returns false
```
## `countOnly(allItems, itemsToCount)`:
* The countOnly function counts the occurrences of items in the `allItems` array that are specified in the `itemsToCount` object.
  * The function returns an object where each key represents an item from `allItems` and the corresponding value is the count of that item in the array.
  * Only items that are explicitly specified in `itemsToCount` are counted.
  * If an item's count is zero, it will not be included in the results.

#### Example
```javascript
// Example 1: Counting specified items in an array
countOnly(/* All items */, /* Items to count */) // Returns /* Counted items object */

// Example 2: Counting specified items in another array
countOnly(/* All items */, /* Items to count */) // Returns /* Counted items object */
```
## `countLetters(letters)`:
* The countLetters function counts the occurrences of each letter in the given array.
  * The function returns an object where each key represents a lowercase letter found in the array and the corresponding value is the count of that letter.
  * The counting is case-insensitive.
  * Spaces in the array are ignored.

#### Example
```javascript
// Example 1: Counting letters in an array
countLetters(/* Array of letters */) // Returns /* Counted letters object */

// Example 2: Counting letters in another array
countLetters(/* Array of letters */) // Returns /* Counted letters object */
```
## `assertObjectsEqual(actual, expected)`:
* The assertObjectsEqual function compares two objects for deep equality and prints a message indicating whether the comparison passes or fails.
  * The function uses the `eqObjects` function to perform the comparison.
  * If the objects are equal, a success message is printed.
  * If the objects are not equal, a failure message is printed.

#### Example
```javascript
// Example 1: Comparing and asserting equal objects
assertObjectsEqual(/* Actual object */, /* Expected object */);

// Example 2: Comparing and asserting different objects
assertObjectsEqual(/* Actual object */, /* Expected object */);
```
## `assertEqual(actual, expected)`:
* The assertEqual function compares two values for equality and prints a message indicating whether the comparison passes or fails.
  * If the values are equal, a success message is printed.
  * If the values are not equal, a failure message is printed.

#### Example
```javascript
// Example 1: Comparing and asserting equal values
assertEqual(/* Actual value */, /* Expected value */);

// Example 2: Comparing and asserting different values
assertEqual(/* Actual value */, /* Expected value */);
```
## `assertArraysEqual(array1, array2)`:
* The assertArraysEqual function compares two arrays for equality and prints a message indicating whether the comparison passes or fails.
  * The function uses the `eqArrays` function to perform the comparison.
  * If the arrays are equal, a success message is printed.
  * If the arrays are not equal, a failure message is printed.

#### Example
```javascript
// Example 1: Comparing and asserting equal arrays
assertArraysEqual(/* Array 1 */, /* Array 2 */);

// Example 2: Comparing and asserting different arrays
assertArraysEqual(/* Array 1 */, /* Array 2 */);
```