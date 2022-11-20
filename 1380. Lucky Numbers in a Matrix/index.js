const luckyNumbers = function (matrix) {
  const min = [];
  const max = [];
  let result = [];

  const height = matrix.length;
  const width = matrix[0].length;

  for (let i = 0; i < height; i++) {
    min.push(Math.min(...matrix[i]));
  }

  for (let i = 0; i < width; i++) {
    let temp = [];
    for (let j = 0; j < height; j++) {
      temp.push(matrix[j][i]);
    }
    max.push(Math.max(...temp));
  }

  result = max.filter((num) => min.includes(num));

  return result;
};
