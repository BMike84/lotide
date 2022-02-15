const assertEqual = require('./assertEqual');

const tail = function(words) {
  const newArray = words.slice(1);
  return newArray;
};

module.exports = tail;


