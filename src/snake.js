/* eslint-disable no-magic-numbers */
const position = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

const getPosition = function (direction) {
  const moves = {
    up: ([row, column]) => [row - 1, column],
    down: ([row, column]) => [row + 1, column],
    left: ([row, column]) => [row, column + 1],
    right: ([row, column]) => [row, column - 1]
  };
  return moves[direction];
};

const nextPosition = function (currentPosition, direction) {
  const changePosition = getPosition(direction);
  return changePosition(currentPosition);
};

const resetPositions = function ([row, column], positions) {
  const newPositions = positions.map(position => position.fill('  '));
  newPositions[row][column] = '*';
  return newPositions;
};

exports.nextPosition = nextPosition;
exports.resetPositions = resetPositions;

