const oddCells = function (m, n, indices) {
  let count = 0;
  let row = new Array(m).fill(0);
  let column = new Array(n).fill(0);

  for (let i = 0; i < indices.length; i++) {
    row[indices[i][0]]++;
    column[indices[i][1]]++;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((row[i] + column[j]) % 2 !== 0) {
        count++;
      }
    }
  }

  return count;
};
