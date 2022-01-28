//function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //  false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // true 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // false