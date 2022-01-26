const tail = function(words) {
  const newArray = words.slice(1);
  return newArray;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(tail(words).length, 3);