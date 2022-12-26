const minTimeToVisitAllPoints = function (points) {
  let count = 0;

  for (let i = 0; i < points.length - 1; i++) {
    // 현재 점에서 다음 점 사이 x,y 좌표 값의 차이의 절댓값중 큰 값이 다음 점으로 이동하는데 걸리는 시간이다.
    count += Math.max(
      Math.abs(points[i][0] - points[i + 1][0]),
      Math.abs(points[i][1] - points[i + 1][1])
    );
  }

  return count;
};
