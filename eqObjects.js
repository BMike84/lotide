const eqArrays = require("./eqArrays");

// function that sees if 2 objects are equal
const eqObjects = function(object1, object2) {
  const keyOne = Object.keys(object1);
  const keyTwo = Object.keys(object2);

  if (keyOne.length !== keyTwo.length) {
    return false;
  }

  for (let key of keyOne) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false
    }
    
  }
  return true;
}

module.exports = eqObjects;