const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Actual Results: ${actual} === Expected Results: ${expected}`);
  } else {
    console.log(`Actual Results: ${actual} !== Expected Results: ${expected}`);
  }  
};

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
//figure out how to not put space in the results!
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
//remove space in keys in objects
console.log(letterPositions('hello world'));
assertArraysEqual(letterPositions("hello").o, [3]);