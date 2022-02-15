const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
  
  it("returns 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2);
  });

  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5,]), [2, 3, 4, 5,]);
  });

})