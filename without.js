const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const without = function(array, removeItems) {
  let resultsArray = [];
  for (const item of array) {
    if (!removeItems.includes(item)) {
      resultsArray.push(item);
    }
  }
  return resultsArray;
};

module.exports = without;
