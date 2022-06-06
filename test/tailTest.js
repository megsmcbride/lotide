const tail = require('../tail');
const { assert } = require('chai');

describe("#tail", () => {
  it("returns [2, 3, 4] when passed [1, 2, 3, 4] ", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns [] when passed [] ", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [] when passed [1] ", () => {
    assert.deepEqual(tail([1]), []);
  });
});
