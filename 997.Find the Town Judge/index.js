const findJudge = function (n, trust) {
  let a = new Array(n).fill(0);
  let b = new Array(n).fill(0);
  let result = -1;

  for (let i = 0; i < trust.length; i++) {
    // 믿는 사람이 있는 사람의 label 을 a배열에 , 믿음을 받는 사람의 label을 b 배열에 저장한다.
    const [truster, trustee] = trust[i];
    a[truster - 1]++;
    b[trustee - 1]++;
  }

  for (let i = 0; i < n; i++) {
    if (b[i] === n - 1 && a[i] === 0) {
      // trustee 배열에서 값이 n-1인 숫자중 truster 배열에서 값이 0인 index를 찾는다
      result = i + 1;
      return result;
    }
  }

  return result;
};
