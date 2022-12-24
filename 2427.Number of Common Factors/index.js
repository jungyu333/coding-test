const commonFactors = function (a, b) {
  const minimum = Math.min(a, b);
  let count = 0;
  for (let i = 1; i <= minimum; i++) {
    if (a % i === 0 && b % i === 0) {
      // i 가 a , b 를 나누었을 때 둘다 나머지가 0이라면 공통 약수이다
      count++;
    }
  }

  return count;
};
