const { isValidPosition } = require('../src/snake.js');
const assert = require('assert');

describe('isValidPosition', () => {
  it('If both positionss is less than 5 and greater than -1', () => {
    assert.deepStrictEqual(isValidPosition([2, 1]), true);
  });

  it('If row positions is greater than 4', () => {
    assert.deepStrictEqual(isValidPosition([5, 1]), false);
  });

  it('If row positions is less than 0', () => {
    assert.deepStrictEqual(isValidPosition([-1, 1]), false);
  });

  it('If column positions is less than 0', () => {
    assert.deepStrictEqual(isValidPosition([1, -1]), false);
  });

  it('If column positions is greater than 4', () => {
    assert.deepStrictEqual(isValidPosition([1, 5]), false);
  });
});
