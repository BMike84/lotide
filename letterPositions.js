const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`[${actual}] !== ${expected}`);
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
  let index = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      results[sentence[i]];
    }else if(results[sentence[i]]) {
      const concatIndex = results[sentence[i]];
      results[sentence[i]] = concatIndex.concat(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  
  return results;
}
//remove space in keys in objects
console.log(letterPositions('hello world'));
assertArraysEqual(letterPositions("hello").o, [4]);