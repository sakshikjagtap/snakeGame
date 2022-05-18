/* eslint-disable no-magic-numbers */
const position = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

const getPosition = function (direction) {
  const moves = {
    up: ([row, column]) => [row - 1, column],
    down: ([row, column]) => [row + 1, column],
    left: ([row, column]) => [row, column - 1],
    right: ([row, column]) => [row, column + 1]
  };
  return moves[direction];
};

const nextPosition = function (currentPosition, direction) {
  const newPosition = getPosition(direction);
  try {
    return newPosition(currentPosition);
  } catch (error) {
    return 'Enter valid direction';
  }
};

const isValidPosition = function ([row, column]) {
  const validateRow = row < 5 && row > -1;
  const validateColumn = column < 5 && column > -1;
  return validateRow && validateColumn;
};

const resetPositions = function ([row, column], positions) {
  const newPositions = positions.map(position => position.fill('  '));
  newPositions[row][column] = '*';
  return newPositions;
};

exports.nextPosition = nextPosition;
exports.isValidPosition = isValidPosition;
exports.resetPositions = resetPositions;

