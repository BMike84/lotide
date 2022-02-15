const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let final = [];
  let middle = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return final;
  } else if (array.length % 2 !== 0) {
    final.push(array[middle])
  } else {
    final.push(array[middle - 1], array[middle])
  }
 
  return final;
}

module.exports = middle;
