const assertEqual = require('./assertEqual');

const tail = function(words) {
  const newArray = words.slice(1);
  return newArray;
};

module.exports = tail;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(tail(words).length, 3);

