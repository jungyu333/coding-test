const binaryGap = function (n) {
  const binary = n.toString(2); // 2진수로 변환
  let max = 0;
  for (let i = 0; i < binary.length; i++) {
    let current = 0;
    if (binary[i] === "1") {
      // 1이라면
      let temp = binary.slice(i + 1); //현재 인덱스 다음부터 뒤쪽배열을 잘라서
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] === "1") {
          // 자른 배열에서 1이나오면 길이를 계산
          current = j + i + 1 - i;
          if (current >= max) {
            // 최댓값과 비교해서 최댓값 갱신
            max = current;
          }
          break;
        }
      }
    }
  }

  return max;
};
