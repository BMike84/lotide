const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const without = function(array, value) {
  let resultsArray = [];
  for (const item of array) {
    if (!value.includes(item)) {
      resultsArray.push(item);
    }
  }
  return resultsArray;
};

module.exports = without;
