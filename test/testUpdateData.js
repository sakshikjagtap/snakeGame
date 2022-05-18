const { updateData } = require('../src/snake.js');
const assert = require('assert');

describe('updateData', () => {
  it('If new snakePosition and foodPosition is not same', () => {
    const data = {
      currentPosition: [0, 2],
      foodPosition: [2, 3],
      gameStatus: true
    };
    assert.deepStrictEqual(updateData(data, [1, 2]), {
      currentPosition: [1, 2], foodPosition: [2, 3], gameStatus: true
    });
  });
});