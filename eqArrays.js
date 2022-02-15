const assertEqual = require('./assertEqual');

function eqArrays(one, two) {
  if(one.length !== two.length) {
    return false;
  }
  for (let i = 0; i < one.length; i++) {
    if(one[i] !== two[i]) {
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;
