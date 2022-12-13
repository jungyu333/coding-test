const minimumCost = function (cost) {
  let sum = 0;
  cost.sort((a, b) => b - a); // 내림차순 정렬
  if (cost.length <= 2) {
    // 배열의 길이가 2 이하면 그대로 요소들의 합을 리턴
    sum = cost.reduce((sum, current) => sum + current);
    return sum;
  } else {
    for (let i = 0; i < cost.length; i += 3) {
      // 앞의 두개 숫자를 배열에서 빼서 sum에 더하고 그 다음 숫자를 배열에서 삭제한다
      if (cost.length >= 3) {
        sum += cost.shift();
        sum += cost.shift();
        cost.shift();
        i -= 3;
      } else {
        // 남은 배열의 길이가 3 미만이면 남은 숫자를 다 더해준다.
        sum += cost.reduce((sum, current) => sum + current);
      }
    }
    return sum;
  }
};
