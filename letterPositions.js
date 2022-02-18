const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Actual Results: ${actual} === Expected Results: ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Actual Results: ${actual} !== Expected Results: ${expected}`);
  }  
};


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!eqArrays(array1[i], array2[i])) {
          return false;
        }
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
}

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if(results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
}

<<<<<<< HEAD
assertArraysEqual(letterPositions("hello").o, [4]);
=======
assertArraysEqual(letterPositions("hello").o, [4]);
>>>>>>> ca476235e962cfc0b35471a1e8797d73b5206fd6
