function assertArraysEqual(actual, expected) {
  if(actual !== expected) {
    console.log(`${actual} !== ${expected}`);
  } else {
    console.log(`[${actual}] !== ${expected}`);
  }
  
}

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
function without(array, value) {
  let newArr = array;
  for(let i = 0; i < newArr.length; i ++) {
    for (let val of value) {
      if(newArr[i] === val) {
        const arr = newArr.splice(i, 1);
      }
    }    
  }
  return newArr;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);