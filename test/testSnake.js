const lib = require('../src/snake.js');
const assert = require('assert');

describe('changePosition', () => {
  it('should give up position', () => {
    assert.deepStrictEqual(lib.changePosition([1, 2], 'up'), [0, 2]);
  });

  it('should give down position', () => {
    assert.deepStrictEqual(lib.changePosition([0, 2], 'down'), [1, 2]);
  });

  it('should give left position', () => {
    assert.deepStrictEqual(lib.changePosition([0, 1], 'left'), [0, 0]);
  });

  it('should give right position', () => {
    assert.deepStrictEqual(lib.changePosition([0, 1], 'right'), [0, 2]);
  });

  it('should give message as invalid move', () => {
    assert.deepStrictEqual(lib.changePosition([0, 1], 'abc'), 'Enter valid direction');
  });
});
