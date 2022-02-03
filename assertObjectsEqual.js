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

const eqObjects = function(object1, object2) {
  const keyOne = Object.keys(object1);
  const keyTwo = Object.keys(object2);

  if (keyOne.length !== keyTwo.length) {
    return false;
  }

  for (let key of keyOne) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false
    }
    
  }
  return true;
}

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Actual Results: ${actual} === Expected Results: ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Actual Results: ${actual} !== Expected Results: ${expected}`);
  }  
  
};


const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
console.log('ab === ba');
assertObjectEqual(eqObjects(ab, ba), true);


console.log('------------');
console.log('ab === abc');
const abc = { a: "1", b: "2", c: "3" };
assertObjectEqual(eqObjects(ab, abc), false);

console.log('------------');
console.log('cd === dc');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectEqual(eqObjects(cd, dc), true);

console.log('------------');
console.log('cd === cd2');

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectEqual(eqObjects(cd, cd2), false);

