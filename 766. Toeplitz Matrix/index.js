const isToeplitzMatrix = function (matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  for (let i = 0; i < height - 1; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i + 1][j + 1] !== undefined) {
        if (matrix[i + 1][j + 1] !== matrix[i][j]) return false;
      } else {
        continue;
      }
    }
  }

  return true;
};
