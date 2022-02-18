const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = function(array) {
  let newArray = array.flat();
  return newArray;
};

module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

