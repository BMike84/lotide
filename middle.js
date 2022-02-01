const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`[${actual}] !== ${expected}`);
  }  
};

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
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]