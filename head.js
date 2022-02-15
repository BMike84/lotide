const assertEqual = require('./assertEqual');

const head = function(actual) {
  return actual[0];
};

// //test code
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;