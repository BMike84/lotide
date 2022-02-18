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
  let resultsArray = [];
  for (const item of array) {
    if (!value.includes(item)) {
      resultsArray.push(item);
    }
  }
  return resultsArray;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"])) 
console.log(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]) )
