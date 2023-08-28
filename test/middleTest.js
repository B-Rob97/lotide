const middle = require("../middle");
const assert = require('chai').assert;

describe("Middle Tests", function() {
  it("returns [2, 3] when passed [1, 2, 3, 4]", function() {
    const input = [1, 2, 3, 4];
    const expected = [2, 3];
    const result = middle(input);
    assert.deepEqual(result, expected);
  });

  it("returns [2] when passed [1, 2, 3]", function() {
    const input = [1, 2, 3];
    const expected = [2];
    const result = middle(input);
    assert.deepEqual(result, expected);
  });

  it("returns [] when passed [1]", function() {
    const input = [1];
    const expected = [];
    const result = middle(input);
    assert.deepEqual(result, expected);
  });

  it("returns [] when passed [1, 2]", function() {
    const input = [1, 2];
    const expected = [];
    const result = middle(input);
    assert.deepEqual(result, expected);
  });

  it("returns [] when passed []", function() {
    const input = [];
    const expected = [];
    const result = middle(input);
    assert.deepEqual(result, expected);
  });

  it("returns a NEW array [3] and does not change the input array [1, 2, 3, 4, 5]", function() {
    const input = [1, 2, 3, 4, 5];
    const expected = [3];
    const result = middle(input);
    assert.deepEqual(result, expected);
    assert.deepEqual(input, [1, 2, 3, 4, 5]);
  });

  it("returns a NEW array [2, 3] and does not change the input array [1, 2, 3, 4]", function() {
    const input = [1, 2, 3, 4];
    const expected = [2, 3];
    const result = middle(input);
    assert.deepEqual(result, expected);
    assert.deepEqual(input, [1, 2, 3, 4]);
  });

});