const head = require('../head.js');
const assertEqual = require('../assertEqual.js');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([1, 2, 3]));
console.log(head([1]));
console.log(head([]));