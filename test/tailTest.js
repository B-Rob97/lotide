const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Tests

const testNumbers = [5, 10, 15, 20, 25];
console.log("RETURN: [10, 15, 20, 25]",tail(testNumbers));

console.log("RETURN: [2, 1]", tail([3, 2, 1]));
console.log("RETURN: ['World]" ,tail(["Hello", "World"]));
console.log("RETURN: [5, 10, 15, 20, 25]",testNumbers);
console.log("RETURN: []", tail([]));
console.log("RETURN: []", tail([1]));


const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log("RETURN: ['Lighthhouse', 'Labs']", tail(words));

assertEqual(words.length, 3);
assertEqual(tail(testNumbers), testNumbers);