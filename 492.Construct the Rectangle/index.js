const constructRectangle = function (area) {
  const sqrtNum = Math.floor(Math.sqrt(area));
  const array = [];
  let minDiff = Infinity;
  let minDiffIndex = Infinity;

  for (let i = area; i >= sqrtNum; i--) {
    if (Number.isInteger(area / i) && i >= area / i) {
      // i로 area를 나눈 몫이 정수이고 L >= W인 경우 array에 push
      array.push([i, area / i]);
    }
  }

  array.forEach((item, index) => {
    // L-W 값이 최소값이면 L-W 값을 최솟값으로 갱신하고 해당 인덱스를 저장한다.
    if (item[0] - item[1] <= minDiff) {
      minDiff = item[0] - item[1];
      minDiffIndex = index;
    }
  });

  return array[minDiffIndex];
};
