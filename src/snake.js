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

const changePosition = function (currentPosition, direction) {
  const nextPosition = getPosition(direction);
  try {
    return nextPosition(currentPosition);
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

exports.changePosition = changePosition;
exports.isValidPosition = isValidPosition;
exports.resetPositions = resetPositions;

