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

const without = function(array, value) {
  let newArr = array;
  for (let i = 0; i < newArr.length; i ++) {
    for (let val of value) {
      if (newArr[i] === val) {
        const arr = newArr.splice(i, 1);
      }
    }
  }
  return newArr;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);