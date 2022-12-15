const largestInteger = function (num) {
  num = String(num).split("");

  const odd = [];
  const even = [];
  const oddIndex = [];
  const evenIndex = [];
  const result = [];

  for (let i = 0; i < num.length; i++) {
    // 짝수 숫자와 홀수 숫자를 나누어서 숫자와 인덱스 값을 배열에 저장
    if (parseInt(num[i]) % 2 === 0) {
      even.push(parseInt(num[i]));
      evenIndex.push(i);
    } else {
      odd.push(parseInt(num[i]));
      oddIndex.push(i);
    }
  }

  odd.sort((a, b) => b - a); // 내림차순 정렬
  even.sort((a, b) => b - a);

  for (let i = 0; i < evenIndex.length; i++) {
    // 저장해둔 인덱스 순으로 result 배열에 넣어준다.
    result[evenIndex[i]] = even[i];
  }

  for (let i = 0; i < oddIndex.length; i++) {
    result[oddIndex[i]] = odd[i];
  }

  return result.join("");
};
