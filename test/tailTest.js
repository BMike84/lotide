const tail = require('../tail');
const assertEqual = require('../assertEqual');

//test code
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(tail(words).length, 3);