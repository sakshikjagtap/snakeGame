const { nextPosition } = require('../src/snake.js');
const assert = require('assert');

describe('nextPosition', () => {
  it('should give up position', () => {
    assert.deepStrictEqual(nextPosition([1, 2], 'up'), [0, 2]);
  });

  it('should give down position', () => {
    assert.deepStrictEqual(nextPosition([0, 2], 'down'), [1, 2]);
  });

  it('should give left position', () => {
    assert.deepStrictEqual(nextPosition([0, 1], 'left'), [0, 0]);
  });

  it('should give right position', () => {
    assert.deepStrictEqual(nextPosition([0, 1], 'right'), [0, 2]);
  });

  it('should give message as invalid move', () => {
    assert.deepStrictEqual(nextPosition([0, 1], 'abc'), 'Enter valid direction');
  });
});
