const shiftGrid = function (grid, k) {
  let count = 0;
  const m = grid.length;
  const n = grid[0].length;

  while (count < k) {
    //mxn 배열 생성하기
    const result = Array.from(Array(m), () => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 2번 이동 규칙
        if (j === n - 1) {
          if (i + 1 < m) {
            result[i + 1][0] = grid[i][j];
          }
        } else {
          // 1번 이동규칙
          result[i][j + 1] = grid[i][j];
        }
      }
    }
    // 3번 이동규칙
    result[0][0] = grid[m - 1][n - 1];

    grid = result;
    count++;
  }

  return grid;
};
