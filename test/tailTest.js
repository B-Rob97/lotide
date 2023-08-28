const tail = require('../tail');
const { expect, assert } = require('chai');

describe("Tail Tests", function() {
  it("Returns [10, 15, 20, 25] when passed [5, 10, 15, 20, 25]", function() {
    const input = [5, 10, 15, 20, 25];
    const expected = [10, 15, 20, 25];
    const result = tail(input);
    expect(result).to.deep.equal(expected);
  });

  it("Returns [2, 1] when passed [3, 2, 1]", function() {
    const input = [3, 2, 1];
    const expected = [2, 1];
    const result = tail(input);
    assert.deepEqual(result, expected);
  });

  it("Returns ['World'] when passed ['Hello', 'World']", function() {
    const input = ['Hello', 'World'];
    const expected = ['World'];
    const result = tail(input);
    assert.deepEqual(result, expected);
  });

  it("Returns [] when passed []", function() {
    const input = [];
    const expected = [];
    const result = tail(input);
    assert.deepEqual(result, expected);
  });

  it("Returns [] when passed [1]", function() {
    const input = [1];
    const expected = [];
    const result = tail(input);
    assert.deepEqual(result, expected);
  });

  it("Returns ['Lighthouse', 'Labs'] when passed ['Yo Yo', 'Lighthouse', 'Labs'] & Checks if original string is unchanged", function() {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    const expected = ['Lighthouse', 'Labs'];
    const result = tail(input);
    assert.deepEqual(result, expected);
    assert.deepEqual(input, ["Yo Yo", "Lighthouse", "Labs"]);
  });

});