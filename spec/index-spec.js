const square = require('../src/square');
const customMatchers = require('./custom-helpers');

describe("Custom", () => {
  beforeEach(() => {
    jasmine.addMatchers(customMatchers);
  });

  it ("should be a square", () => {
    expect(square(2)).toBeSquare(2);
  });
});
