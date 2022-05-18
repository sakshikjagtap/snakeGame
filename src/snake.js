/* eslint-disable no-magic-numbers */

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

const randomCoordinates = function () {
  const row = Math.floor(Math.random() * 5);
  const column = Math.floor(Math.random() * 5);
  return [row, column];
};

const generateFoodPosition = function ([snakeRow, snakeColumn]) {
  let [foodRow, foodColumn] = randomCoordinates();
  if (foodRow === snakeRow && foodColumn === snakeColumn) {
    [foodRow, foodColumn] = randomCoordinates();
  }
  return [foodRow, foodColumn];
};

const isFoodAndSnakePositionSame = function (foodPosition, newPosition) {
  const [foodRow, foodColumn] = foodPosition;
  const [snakeRow, snakeColumn] = newPosition;
  return foodRow === snakeRow && foodColumn === snakeColumn;

};

const updateData = function (data, newPosition) {
  if (isFoodAndSnakePositionSame(data.foodPosition, newPosition)) {
    data.foodPosition = generateFoodPosition(newPosition);
    data.score += 10;
  }
  data.currentPosition = newPosition;
  return data;
};

const resetPositions = function ([snakeRow, snakeColumn], [foodRow, foodColumn
]) {
  const positions = Array(5).fill([]).map(() => Array(5).fill('  '));
  positions[snakeRow][snakeColumn] = 'o ';
  positions[foodRow][foodColumn] = '* ';
  return positions;
};

exports.nextPosition = nextPosition;
exports.isValidPosition = isValidPosition;
exports.resetPositions = resetPositions;
exports.updateData = updateData;

