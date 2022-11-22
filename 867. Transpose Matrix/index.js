const transpose = function (matrix) {
  const width = matrix[0].length;
  const height = matrix.length;

  let arr = new Array(width);

  for (let i = 0; i < width; i++) {
    arr[i] = new Array(height);
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i === j) {
        arr[i][j] = matrix[i][j];
      } else {
        arr[j][i] = matrix[i][j];
      }
    }
  }

  return arr;
};
